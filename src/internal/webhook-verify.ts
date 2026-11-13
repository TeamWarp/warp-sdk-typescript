// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { WarpError } from '../core/error';
import { type HeadersLike, type HeadersProtocol, getHeader, getHeaderValues } from './headers';
import { type NodeCrypto, hmacSha256Parts, nodeCrypto } from './hmac';
import { toBase64 } from './utils/base64';
import { encodeUTF8 } from './utils/bytes';

// The digest and MAC moved to `./hmac` so the signed-URL signer shares them; re-exported so a deep
// import of either from this module keeps working.
export { hmacSha256, sha256 } from './hmac';

/*
 * Standard Webhooks signature verification, with no crypto dependency.
 *
 * `unwrap` is synchronous, which rules out Web Crypto (`crypto.subtle` only returns promises). Where the
 * runtime hands out `node:crypto` synchronously through `process.getBuiltinModule` (Node and Bun, for
 * example), its native HMAC and constant-time comparison are used; everywhere else (browsers, most edge
 * runtimes) the SHA-256 and HMAC in `./hmac` and the comparison below run instead. Only the digest and
 * the MAC are involved, nothing that encrypts.
 */

/** The optional prefix on a Standard Webhooks secret; the rest of the secret is base64. */
const SECRET_PREFIX = 'whsec_';

/**
 * The headers, replay window and algorithm a delivery is verified with. Every field is optional: what
 * an API leaves out falls back to the Standard Webhooks defaults in {@link DEFAULT_SCHEME}.
 */
export type WebhookSignatureScheme = {
  /** Header carrying the message id. */
  readonly idHeader?: string;
  /** Header carrying the unix-seconds timestamp. */
  readonly timestampHeader?: string;
  /** Header carrying the space-separated `v1,<base64>` signatures. */
  readonly signatureHeader?: string;
  /** How far, in seconds, a delivery's timestamp may sit from now in either direction. */
  readonly toleranceSeconds?: number;
  /** The MAC the API signs with. Only `hmac-sha256` is implemented. */
  readonly algorithm?: string;
  /**
   * The helper's decode-only method as generated, named when `algorithm` is one this verifier cannot
   * check; absent when the SDK has none.
   */
  readonly decodeOnly?: string;
};

/** The Standard Webhooks defaults. */
const DEFAULT_SCHEME = {
  idHeader: 'webhook-id',
  timestampHeader: 'webhook-timestamp',
  signatureHeader: 'webhook-signature',
  toleranceSeconds: 5 * 60,
  algorithm: 'hmac-sha256',
} as const;

/**
 * Thrown when a delivery fails verification: a missing header, a timestamp outside the window, no
 * matching signature, or a signature algorithm the SDK cannot check. The name and messages are
 * stable, so callers can match on them.
 *
 * SDKs that verified through the `standardwebhooks` package let that library's class of the same name
 * escape, so callers wrote `err.name === 'WebhookVerificationError'` or `err instanceof
 * WebhookVerificationError`. The name is kept, and the package root exports this class, so both checks
 * keep working once the import points at the SDK. It extends the SDK's base error, so
 * `instanceof WarpError` covers a refused delivery too. A helper configured with
 * an algorithm the verifier does not implement throws it on every call; a missing or malformed
 * secret, and a header the companions find missing, still throw plain `Error`s.
 */
export class WebhookVerificationError extends WarpError {
  constructor(message: string) {
    super(message);
    this.name = 'WebhookVerificationError';
  }
}

/**
 * Verifies a Standard Webhooks delivery, throwing when it is not authentic.
 *
 * The HMAC-SHA256 of `{id}.{timestamp}.{payload}`, keyed with the base64-decoded secret, must equal one
 * of the space-separated `v1,<base64>` entries in the signature header, and the timestamp must be
 * within the scheme's window of now. `nowSeconds` exists for tests.
 *
 * `headers` may be any shape a request handler holds: a fetch `Headers`, a Node header record whose
 * values may be arrays, or entry pairs. They are read through the runtime's one header lookup, so every
 * webhook method reads a delivery's headers the same way.
 */
export const verifyWebhookSignature = (
  payload: string,
  headers: HeadersLike | HeadersProtocol,
  secret: string,
  scheme: WebhookSignatureScheme = {},
  nowSeconds: number = Math.floor(Date.now() / 1000),
): void => {
  const algorithm = scheme.algorithm ?? DEFAULT_SCHEME.algorithm;
  // Anything else would compute the wrong MAC and reject every genuine delivery as unsigned, so it fails
  // up front and says why. It is a `WebhookVerificationError`, the class callers catch to reject a
  // delivery, so the refusal reaches their handler instead of escaping as a crash; the message names
  // the decode-only method the emitter passed (companions can be renamed or turned off, which this
  // shared module cannot know), since the signature then has to be checked outside the SDK.
  if (algorithm !== 'hmac-sha256') {
    const decode = scheme.decodeOnly
      ? `decode the body with ${scheme.decodeOnly}`
      : 'parse the body yourself';
    throw new WebhookVerificationError(
      `Webhook signature algorithm ${algorithm} is not supported; only hmac-sha256 is. ` +
        `Verify the signature yourself, then ${decode}`,
    );
  }
  // The secret is checked first, so a misconfigured SDK fails the same way whatever the delivery.
  const key = decodeSecret(secret);

  // No headers at all is a delivery with no signature, not a reason to skip the check.
  if (headers === null || typeof headers !== 'object') {
    throw new WebhookVerificationError('Missing required headers');
  }
  const { id, timestampHeader, signatures } = readSignedHeaders(headers, scheme);
  if (!signatures || !id || !timestampHeader) {
    throw new WebhookVerificationError('Missing required headers');
  }

  // Digits only: `parseInt` would also take `+1614265330`, `1614265330.9` or `1614265330abc`, and a
  // header the sender did not write should not verify.
  if (!/^[0-9]+$/.test(timestampHeader)) throw new WebhookVerificationError('Invalid Signature Headers');
  const timestamp = Number(timestampHeader);
  const tolerance = scheme.toleranceSeconds ?? DEFAULT_SCHEME.toleranceSeconds;
  // Both directions are bounded: an old timestamp is a replay, and one far in the future would let a
  // captured delivery be replayed for as long as it stays ahead of the clock.
  if (nowSeconds - timestamp > tolerance) throw new WebhookVerificationError('Message timestamp too old');
  if (timestamp > nowSeconds + tolerance) throw new WebhookVerificationError('Message timestamp too new');

  // The parsed number is signed, not the header text: a header of `01614265330` is checked against the
  // signature of `1614265330`.
  const crypto = nodeCrypto();
  const expected = encodeUTF8(toBase64(signedContentMac(crypto, key, `${id}.${timestamp}.`, payload)));
  const equal = crypto?.timingSafeEqual ? nativeEqual(crypto.timingSafeEqual) : constantTimeEqual;

  // A sender rotating its secret signs with each key it holds, so any one matching entry is enough.
  // Entries for other versions (`v1a,…`) are skipped rather than rejected.
  for (const spaced of signatures.split(' ')) {
    // Node and most frameworks fold repeated header lines into one value joined by `, `, which leaves
    // a trailing comma on every entry but the last.
    const entry = spaced.endsWith(',') ? spaced.slice(0, -1) : spaced;
    const comma = entry.indexOf(',');
    // Exactly `<version>,<signature>`: an entry with a second comma is malformed, not a match on its
    // first two fields.
    if (comma === -1 || entry.indexOf(',', comma + 1) !== -1 || entry.slice(0, comma) !== 'v1') continue;
    // The base64 text is compared rather than the decoded bytes, so only the canonical encoding of the
    // right signature is accepted.
    if (equal(encodeUTF8(entry.slice(comma + 1)), expected)) return;
  }
  throw new WebhookVerificationError('No matching signature found');
};

/**
 * The id, timestamp and signature headers a delivery carries.
 *
 * The id and timestamp are single values, so a repeated one reads as its first. Every signature value
 * is kept and joined the way `Headers.get` and Node fold repeated lines (`, `), so a sender rotating
 * its key across two `webhook-signature` lines verifies whether the handler holds a fetch `Headers`, a
 * folded Node record or Node's `headersDistinct` arrays.
 *
 * A malformed entry list (a `null` row, a name that is not a string) makes the lookup throw a
 * `TypeError`; it is reported as missing headers instead, so a caller of the verifier (the parse
 * method passes its headers straight here) catching only `WebhookVerificationError` sees the refusal.
 */
const readSignedHeaders = (
  headers: HeadersLike | HeadersProtocol,
  scheme: WebhookSignatureScheme,
): { id: string | undefined; timestampHeader: string | undefined; signatures: string } => {
  try {
    return {
      id: getHeader(headers, scheme.idHeader ?? DEFAULT_SCHEME.idHeader),
      timestampHeader: getHeader(headers, scheme.timestampHeader ?? DEFAULT_SCHEME.timestampHeader),
      signatures: getHeaderValues(headers, scheme.signatureHeader ?? DEFAULT_SCHEME.signatureHeader).join(
        ', ',
      ),
    };
  } catch {
    throw new WebhookVerificationError('Missing required headers');
  }
};

/** The global the verifier feature-detects; browsers and edge runtimes have no `Buffer`. */
type RuntimeGlobals = {
  readonly Buffer?: { readonly isBuffer?: (value: unknown) => boolean } | undefined;
};

/** {@link RuntimeGlobals}, read on every call so a test or polyfill that swaps them is seen. */
const runtimeGlobals = (): RuntimeGlobals => globalThis as unknown as RuntimeGlobals;

/**
 * `node:crypto`'s constant-time comparison, which throws on a length mismatch rather than answering:
 * lengths are compared first, as {@link constantTimeEqual} does, since a signature's length is public.
 */
const nativeEqual =
  (timingSafeEqual: NonNullable<NodeCrypto['timingSafeEqual']>) =>
  (left: Uint8Array, right: Uint8Array): boolean =>
    left.length === right.length && timingSafeEqual(left, right);

/** A Node `Buffer`, without assuming `Buffer` exists: browsers and edge runtimes have none. */
const isBuffer = (value: unknown): value is Uint8Array =>
  value instanceof Uint8Array && runtimeGlobals().Buffer?.isBuffer?.(value) === true;

/**
 * The HMAC-SHA256 of `prefix` followed by the payload, natively when `crypto` is there.
 *
 * The parameter is typed `string`, but a JavaScript caller may hand over the raw Node `Buffer` a
 * framework read the body into: its bytes are signed as received, so a body that is not valid UTF-8 is
 * not first rewritten with replacement characters. Any other value is refused, because `unwrap` parses
 * what it verified and only a string or a `Buffer` turns back into the same text.
 */
const signedContentMac = (
  crypto: NodeCrypto | null,
  key: Uint8Array,
  prefix: string,
  payload: string,
): Uint8Array => {
  if (typeof payload !== 'string' && !isBuffer(payload)) {
    throw new Error('Expected payload to be of type string or Buffer.');
  }
  // `node:crypto` and `TextEncoder` both write a lone surrogate as U+FFFD, so the two paths sign the
  // same bytes for every string.
  if (crypto) return crypto.createHmac('sha256', key).update(prefix).update(payload).digest();
  const body = typeof payload === 'string' ? encodeUTF8(payload) : payload;
  return hmacSha256Parts(key, [encodeUTF8(prefix), body]);
};

/**
 * The HMAC key a secret encodes: base64 after an optional `whsec_` prefix.
 *
 * Decoded with the strict decoder below rather than `fromBase64`, whose Node path silently skips
 * characters outside the alphabet. A mistyped secret would then verify against a different key and
 * reject every delivery as unsigned, instead of failing loudly with a decoding error.
 */
const decodeSecret = (secret: string): Uint8Array => {
  if (typeof secret !== 'string') throw new Error('Expected secret to be of type string');
  const encoded = secret.startsWith(SECRET_PREFIX) ? secret.slice(SECRET_PREFIX.length) : secret;
  const key = decodeBase64(encoded);
  // An empty key would make every signature trivially forgeable by anyone who knows the scheme.
  if (key.length === 0) throw new Error("Secret can't be empty.");
  return key;
};

/**
 * Standard-alphabet base64, decoded strictly: every character must be in the alphabet and decode into
 * the key.
 *
 * Trailing `=` is optional but at most two, and the input (padding included) must be at least four
 * characters. A final group of a single character carries fewer than eight bits, so it can only be a
 * typo and is refused rather than dropped. Every character is decoded without branching on its value,
 * since this is a secret and a branchy decoder leaks which character classes it holds through timing.
 */
const decodeBase64 = (encoded: string): Uint8Array => {
  if (encoded.length === 0) return new Uint8Array(0);
  let padding = 0;
  while (padding < encoded.length && encoded.charCodeAt(encoded.length - 1 - padding) === 0x3d) padding++;
  const length = encoded.length - padding;
  if (encoded.length < 4 || padding > 2 || length % 4 === 1)
    throw new Error('Base64Coder: incorrect padding');

  const out = new Uint8Array(Math.floor((length * 3) / 4));
  let invalid = 0;
  let buffer = 0;
  let bits = 0;
  let index = 0;
  for (let i = 0; i < length; i++) {
    const value = base64Sextet(encoded.charCodeAt(i));
    invalid |= value;
    buffer = ((buffer << 6) | (value & 0x3f)) & 0xffffff;
    bits += 6;
    // Depends only on the position, never on the secret's contents.
    if (bits >= 8) {
      bits -= 8;
      out[index++] = (buffer >>> bits) & 0xff;
    }
  }
  if ((invalid & 0x100) !== 0) throw new Error('Base64Coder: incorrect characters for decoding');
  return out;
};

/** All bits set when `lo <= c <= hi`, otherwise zero, without a branch on `c`. */
const inRange = (c: number, lo: number, hi: number): number => ((lo - 1 - c) & (c - hi - 1)) >> 31;

/** The six-bit value of one base64 character, with bit `0x100` set when it is outside the alphabet. */
const base64Sextet = (c: number): number => {
  const upper = inRange(c, 0x41, 0x5a);
  const lower = inRange(c, 0x61, 0x7a);
  const digit = inRange(c, 0x30, 0x39);
  const plus = inRange(c, 0x2b, 0x2b);
  const slash = inRange(c, 0x2f, 0x2f);
  const valid = upper | lower | digit | plus | slash;
  return (
    (upper & (c - 0x41)) |
    (lower & (c - 0x61 + 26)) |
    (digit & (c - 0x30 + 52)) |
    (plus & 62) |
    (slash & 63) |
    (~valid & 0x100)
  );
};

/**
 * Whether two byte strings are equal, in time that depends only on their lengths. Used where the
 * runtime has no `node:crypto` `timingSafeEqual`.
 *
 * Only the length may end the comparison early: it is public anyway (every HMAC-SHA256 signature is
 * 44 base64 characters), while an early exit at the first differing byte would let a forger find the
 * signature one byte at a time from how long each rejection took.
 */
const constantTimeEqual = (left: Uint8Array, right: Uint8Array): boolean => {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let i = 0; i < left.length; i++) difference |= left[i]! ^ right[i]!;
  return difference === 0;
};
