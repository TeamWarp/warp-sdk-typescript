// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { toBase64 } from './utils/base64';
import { encodeUTF8 } from './utils/bytes';

/*
 * Standard Webhooks signature verification, with no crypto dependency.
 *
 * `unwrap` is synchronous, which rules out Web Crypto (`crypto.subtle` only returns promises). Where the
 * runtime hands out `node:crypto` synchronously through `process.getBuiltinModule` (Node and Bun, for
 * example), its native HMAC and constant-time comparison are used; everywhere else (browsers, most edge
 * runtimes) the SHA-256, HMAC and comparison below run instead. Only the digest and the MAC are here,
 * nothing that encrypts.
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
 * Thrown when a delivery fails verification: a missing header, a timestamp outside the window, or no
 * matching signature. The name and messages are stable, so callers can match on them.
 */
export class WebhookVerificationError extends Error {
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
 */
export const verifyWebhookSignature = (
  payload: string,
  headers: Record<string, string>,
  secret: string,
  scheme: WebhookSignatureScheme = {},
  nowSeconds: number = Math.floor(Date.now() / 1000),
): void => {
  const algorithm = scheme.algorithm ?? DEFAULT_SCHEME.algorithm;
  // Anything else would compute the wrong MAC and reject every genuine delivery as unsigned, so it fails
  // up front and says why.
  if (algorithm !== 'hmac-sha256') {
    throw new Error(`Webhook signature algorithm ${algorithm} is not supported; only hmac-sha256 is`);
  }
  // The secret is checked first, so a misconfigured SDK fails the same way whatever the delivery.
  const key = decodeSecret(secret);

  // No headers at all is a delivery with no signature, not a reason to skip the check.
  if (headers === null || typeof headers !== 'object') {
    throw new WebhookVerificationError('Missing required headers');
  }
  const {
    id,
    timestamp: timestampHeader,
    signature: signatureHeader,
  } = signatureHeaders(headers, [
    asciiLowerCase(scheme.idHeader ?? DEFAULT_SCHEME.idHeader),
    asciiLowerCase(scheme.timestampHeader ?? DEFAULT_SCHEME.timestampHeader),
    asciiLowerCase(scheme.signatureHeader ?? DEFAULT_SCHEME.signatureHeader),
  ]);
  if (!signatureHeader || !id || !timestampHeader) {
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
  for (const spaced of signatureHeader.split(' ')) {
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
 * Lowercases ASCII letters only. HTTP header names are ASCII, and `toLowerCase` also folds characters
 * such as the Kelvin sign (U+212A) to `k`, which would let a header no client sends match one it does.
 */
const asciiLowerCase = (name: string): string => name.replace(/[A-Z]/g, (letter) => letter.toLowerCase());

/**
 * The id, timestamp and signature headers, looked up case-insensitively because HTTP header names are,
 * and frameworks hand them over in whatever case they received or normalized them to. When two keys
 * differ only in case, the later one wins. A value that is not a string (a Node header array, say) is
 * treated as missing rather than coerced.
 */
const signatureHeaders = (
  headers: Record<string, string>,
  [idName, timestampName, signatureName]: readonly [string, string, string],
): { id?: string | undefined; timestamp?: string | undefined; signature?: string | undefined } => {
  const found: { id?: string | undefined; timestamp?: string | undefined; signature?: string | undefined } =
    {};
  for (const name of Object.keys(headers)) {
    const value = headers[name];
    const lower = asciiLowerCase(name);
    const text = typeof value === 'string' ? value : undefined;
    if (lower === idName) found.id = text;
    else if (lower === timestampName) found.timestamp = text;
    else if (lower === signatureName) found.signature = text;
  }
  return found;
};

/** The globals the verifier feature-detects, each possibly absent: most runtimes lack at least one. */
type RuntimeGlobals = {
  readonly process?: { readonly getBuiltinModule?: (id: string) => unknown } | undefined;
  readonly Buffer?: { readonly isBuffer?: (value: unknown) => boolean } | undefined;
};

/** {@link RuntimeGlobals}, read on every call so a test or polyfill that swaps them is seen. */
const runtimeGlobals = (): RuntimeGlobals => globalThis as unknown as RuntimeGlobals;

/** The slice of `node:crypto` the verifier uses, when the runtime hands it out synchronously. */
type NodeCrypto = {
  readonly createHmac: (
    algorithm: string,
    key: Uint8Array,
  ) => { update(data: string | Uint8Array): { update(data: string | Uint8Array): { digest(): Uint8Array } } };
  readonly timingSafeEqual?: (left: Uint8Array, right: Uint8Array) => boolean;
};

/**
 * `node:crypto`, through `process.getBuiltinModule` so no static import reaches a browser bundle. `null`
 * where it is missing or throws, which selects the TypeScript implementations below. Looked up on every
 * call rather than cached: the runtime caches the module, and a stale answer would outlive a test or
 * polyfill that swaps `process`.
 */
const nodeCrypto = (): NodeCrypto | null => {
  try {
    const process = runtimeGlobals().process;
    const crypto =
      typeof process?.getBuiltinModule === 'function'
        ? (process.getBuiltinModule('node:crypto') as Partial<NodeCrypto> | undefined)
        : undefined;
    return typeof crypto?.createHmac === 'function' ? (crypto as NodeCrypto) : null;
  } catch {
    // A polyfilled or locked-down `process`: fall back to the TypeScript implementations.
    return null;
  }
};

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

/** The SHA-256 block size, in bytes: what HMAC pads its key to. */
const SHA256_BLOCK_BYTES = 64;

/** The first 32 bits of the fractional parts of the cube roots of the first 64 primes. */
const SHA256_K = new Int32Array([
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
  0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
  0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
  0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
  0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
  0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
  0xc67178f2,
]);

/** The first 32 bits of the fractional parts of the square roots of the first eight primes. */
const SHA256_H0 = [
  0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
];

/**
 * An in-progress SHA-256 (FIPS 180-4, section 6.2). Input is hashed straight from the caller's bytes a
 * block at a time, so a large payload is never copied into a padded buffer; only a partial block waits
 * in `pending`.
 */
type Sha256State = {
  readonly state: Int32Array;
  readonly schedule: Int32Array;
  readonly pending: Uint8Array;
  pendingLength: number;
  /** Bytes hashed so far, for the length field. */
  total: number;
};

/** A fresh SHA-256. */
const sha256Start = (): Sha256State => ({
  state: new Int32Array(SHA256_H0),
  schedule: new Int32Array(64),
  pending: new Uint8Array(SHA256_BLOCK_BYTES),
  pendingLength: 0,
  total: 0,
});

/**
 * Runs the compression function over every whole block of `bytes` from `offset` to `end`.
 *
 * Kept as one flat function over local `| 0` integers, with the rotations written out, because that is
 * the shape JavaScript engines compile to straight 32-bit arithmetic; helper calls and array-held
 * working variables cost several times the throughput.
 */
const sha256Blocks = (hash: Sha256State, bytes: Uint8Array, offset: number, end: number): void => {
  const { state, schedule: w } = hash;
  let h0 = state[0]!;
  let h1 = state[1]!;
  let h2 = state[2]!;
  let h3 = state[3]!;
  let h4 = state[4]!;
  let h5 = state[5]!;
  let h6 = state[6]!;
  let h7 = state[7]!;
  for (let at = offset; at + SHA256_BLOCK_BYTES <= end; at += SHA256_BLOCK_BYTES) {
    for (let t = 0; t < 16; t++) {
      const i = at + t * 4;
      w[t] = (bytes[i]! << 24) | (bytes[i + 1]! << 16) | (bytes[i + 2]! << 8) | bytes[i + 3]!;
    }
    for (let t = 16; t < 64; t++) {
      const low = w[t - 15]!;
      const high = w[t - 2]!;
      const sigma0 = ((low >>> 7) | (low << 25)) ^ ((low >>> 18) | (low << 14)) ^ (low >>> 3);
      const sigma1 = ((high >>> 17) | (high << 15)) ^ ((high >>> 19) | (high << 13)) ^ (high >>> 10);
      w[t] = (w[t - 16]! + sigma0 + w[t - 7]! + sigma1) | 0;
    }
    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;
    let e = h4;
    let f = h5;
    let g = h6;
    let h = h7;
    for (let t = 0; t < 64; t++) {
      const sum1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
      // Ch and Maj in their three-operation forms, equal to FIPS 180-4's `(e & f) ^ (~e & g)` and
      // `(a & b) ^ (a & c) ^ (b & c)`.
      const choice = g ^ (e & (f ^ g));
      const temp1 = (h + sum1 + choice + SHA256_K[t]! + w[t]!) | 0;
      const sum0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
      const majority = (a & b) ^ (c & (a ^ b));
      const temp2 = (sum0 + majority) | 0;
      h = g;
      g = f;
      f = e;
      e = (d + temp1) | 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) | 0;
    }
    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0;
    h5 = (h5 + f) | 0;
    h6 = (h6 + g) | 0;
    h7 = (h7 + h) | 0;
  }
  state[0] = h0;
  state[1] = h1;
  state[2] = h2;
  state[3] = h3;
  state[4] = h4;
  state[5] = h5;
  state[6] = h6;
  state[7] = h7;
};

/** Feeds `bytes` into `hash`: topping up a pending partial block first, then whole blocks in place. */
const sha256Update = (hash: Sha256State, bytes: Uint8Array): void => {
  hash.total += bytes.length;
  let offset = 0;
  if (hash.pendingLength > 0) {
    offset = Math.min(SHA256_BLOCK_BYTES - hash.pendingLength, bytes.length);
    hash.pending.set(bytes.subarray(0, offset), hash.pendingLength);
    hash.pendingLength += offset;
    if (hash.pendingLength < SHA256_BLOCK_BYTES) return;
    sha256Blocks(hash, hash.pending, 0, SHA256_BLOCK_BYTES);
    hash.pendingLength = 0;
  }
  const whole = offset + Math.floor((bytes.length - offset) / SHA256_BLOCK_BYTES) * SHA256_BLOCK_BYTES;
  sha256Blocks(hash, bytes, offset, whole);
  hash.pending.set(bytes.subarray(whole), 0);
  hash.pendingLength = bytes.length - whole;
};

/**
 * Pads and finishes `hash` (section 5.1.1): a single 1 bit, zeros, then the message length in bits as a
 * 64-bit big-endian integer, filling out whole 64-byte blocks. The 0x80 byte and the 8-byte length need
 * 9 bytes, so 55 pending bytes still fit one block and 56 need two.
 */
const sha256Finish = (hash: Sha256State): Uint8Array => {
  const tail = new Uint8Array(
    hash.pendingLength + 9 > SHA256_BLOCK_BYTES ? 2 * SHA256_BLOCK_BYTES : SHA256_BLOCK_BYTES,
  );
  tail.set(hash.pending.subarray(0, hash.pendingLength));
  tail[hash.pendingLength] = 0x80;
  const view = new DataView(tail.buffer);
  // Bit lengths past 2^32 need the high word, which bitwise operators would truncate.
  const bitLength = hash.total * 8;
  view.setUint32(tail.length - 8, Math.floor(bitLength / 0x100000000));
  view.setUint32(tail.length - 4, bitLength >>> 0);
  sha256Blocks(hash, tail, 0, tail.length);

  const digest = new Uint8Array(32);
  const digestView = new DataView(digest.buffer);
  for (let i = 0; i < 8; i++) digestView.setInt32(i * 4, hash.state[i]!);
  return digest;
};

/** The SHA-256 digest of `message`, as 32 bytes. */
export const sha256 = (message: Uint8Array): Uint8Array => {
  const hash = sha256Start();
  sha256Update(hash, message);
  return sha256Finish(hash);
};

/**
 * The HMAC-SHA256 (RFC 2104) of the concatenation of `parts` under `key`, as 32 bytes. The parts are
 * streamed into the inner hash, so the signed content is never assembled into one buffer.
 */
const hmacSha256Parts = (key: Uint8Array, parts: readonly Uint8Array[]): Uint8Array => {
  // A key longer than the block is hashed first; a shorter one is zero-padded to the block.
  const block = new Uint8Array(SHA256_BLOCK_BYTES);
  block.set(key.length > SHA256_BLOCK_BYTES ? sha256(key) : key);
  const innerPad = new Uint8Array(SHA256_BLOCK_BYTES);
  const outerPad = new Uint8Array(SHA256_BLOCK_BYTES);
  for (let i = 0; i < SHA256_BLOCK_BYTES; i++) {
    innerPad[i] = block[i]! ^ 0x36;
    outerPad[i] = block[i]! ^ 0x5c;
  }
  const inner = sha256Start();
  sha256Update(inner, innerPad);
  for (const part of parts) sha256Update(inner, part);
  const outer = sha256Start();
  sha256Update(outer, outerPad);
  sha256Update(outer, sha256Finish(inner));
  return sha256Finish(outer);
};

/** The HMAC-SHA256 (RFC 2104) of `message` under `key`, as 32 bytes. */
export const hmacSha256 = (key: Uint8Array, message: Uint8Array): Uint8Array =>
  hmacSha256Parts(key, [message]);
