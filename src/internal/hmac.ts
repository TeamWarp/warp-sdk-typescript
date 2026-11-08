// File generated from our OpenAPI spec by Scalar. See README.md for details.

/*
 * HMAC-SHA256 with no crypto dependency, shared by the webhook verifier and signed-URL methods.
 *
 * Both callers are synchronous, which rules out Web Crypto (`crypto.subtle` only returns promises).
 * Where the runtime hands out `node:crypto` synchronously through `process.getBuiltinModule` (Node and
 * Bun, for example), its native HMAC is used; everywhere else (browsers, most edge runtimes) the
 * SHA-256 and HMAC below run instead. Only the digest and the MAC are here, nothing that encrypts.
 */

/** The global this module feature-detects; most browsers and edge runtimes have no `process`. */
type RuntimeGlobals = {
  readonly process?: { readonly getBuiltinModule?: (id: string) => unknown } | undefined;
};

/** One running `node:crypto` HMAC: each `update` feeds more of the message, `digest` ends it. */
type NodeHmac = { update(data: string | Uint8Array): NodeHmac; digest(): Uint8Array };

/** The slice of `node:crypto` the SDK uses, when the runtime hands it out synchronously. */
export type NodeCrypto = {
  readonly createHmac: (algorithm: string, key: Uint8Array) => NodeHmac;
  readonly timingSafeEqual?: (left: Uint8Array, right: Uint8Array) => boolean;
};

/**
 * `node:crypto`, through `process.getBuiltinModule` so no static import reaches a browser bundle. `null`
 * where it is missing or throws, which selects the TypeScript implementations below. Looked up on every
 * call rather than cached: the runtime caches the module, and a stale answer would outlive a test or
 * polyfill that swaps `process`.
 */
export const nodeCrypto = (): NodeCrypto | null => {
  try {
    const process = (globalThis as unknown as RuntimeGlobals).process;
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
export const hmacSha256Parts = (key: Uint8Array, parts: readonly Uint8Array[]): Uint8Array => {
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
