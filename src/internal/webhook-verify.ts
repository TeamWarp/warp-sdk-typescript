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
 * `instanceof WarpError` covers a refused delivery too. Where the application has
 * loaded `standardwebhooks` itself, an `instanceof` against that library's class matches a refusal as
 * well (see {@link bridgeLibraryError}), and {@link isWebhookVerificationError} matches both classes
 * wherever that bridge cannot reach. A helper configured with an algorithm the verifier does not
 * implement throws it on every call; a missing or malformed secret, and a header the companions find
 * missing, still throw plain `Error`s.
 */
export class WebhookVerificationError extends WarpError {
  /**
   * Type-only, never set: a private member makes the class nominal, so a plain `Error` is not assignable
   * to it. Without it the class can have exactly `Error`'s members, and a false answer from
   * {@link isWebhookVerificationError} would narrow an `Error`-typed value to `never`.
   */
  declare private readonly webhookVerificationErrorBrand: true;

  constructor(message: string) {
    super(message);
    this.name = 'WebhookVerificationError';
    bridgeLibraryError();
  }
}

/** The package whose `WebhookVerificationError` a handler may import in place of the SDK's. */
const LIBRARY_ID = 'standardwebhooks';

/**
 * Carried by the prototype of every SDK refusal class that bridges, and read by the wrapper the bridge
 * installs. A registry symbol, so the ESM and CommonJS builds, other SDKs and a re-evaluated module all
 * agree on it. Only the copy that installed the wrapper stays reachable through it; later copies and
 * reloads add nothing.
 */
const REFUSAL_BRAND = Symbol.for('scalar-sdk.webhook-verification-error.refusal');

/** Set on a library class once a wrapper is installed, so no later copy or reload stacks another. */
const BRIDGED_MARK = Symbol.for('scalar-sdk.webhook-verification-error.bridged');

Object.defineProperty(WebhookVerificationError.prototype, REFUSAL_BRAND, { value: true });

/**
 * The slice of `node:module`'s `require` the bridge uses: resolution, the shared module cache, and
 * loading a builtin (never a file) where the runtime has no `process.getBuiltinModule`.
 */
type NodeRequire = {
  (id: string): unknown;
  readonly resolve: (id: string, options?: { readonly paths?: readonly string[] }) => string;
  readonly cache: Readonly<Record<string, { readonly exports?: unknown } | undefined>>;
};

/** The slice of `node:module` the bridge uses. */
type NodeModule = { readonly createRequire?: (path: string) => NodeRequire };

/**
 * The slice of this file's own CommonJS `module` the bridge reads. Under Jest, `require` is the test
 * file's module-registry `require`, with `resolve` and a `cache` view of that registry; under Node it is
 * `Module.prototype.require`, which has neither, and `constructor` is the `Module` class.
 */
type HostModule = {
  readonly require?: unknown;
  readonly constructor?: unknown;
};

/**
 * The CommonJS module record Node and test runners wrap the CommonJS build in, read by
 * {@link hostModuleOf}. Declared here, untyped, rather than taken from `@types/node`, which an SDK
 * without Node-only features does not install: without it `tsc` cannot find the name. A `declare`
 * emits nothing, so the name still resolves to the wrapper's `module` at run time.
 */
declare const module: unknown;

/** The globals the bridge feature-detects; browsers and most edge runtimes have no `process`. */
type BridgeGlobals = {
  readonly process?:
    | {
        readonly getBuiltinModule?: (id: string) => unknown;
        readonly cwd?: () => string;
        readonly argv?: readonly string[];
        readonly mainModule?: object | undefined;
      }
    | undefined;
};

/** One module cache the application's copy of the library may sit in, and its entry files there. */
type LibraryLookup = { readonly cache: NodeRequire['cache']; readonly entries: readonly string[] };

/**
 * Where the application's copy of the library would load from, resolved once on the first refusal:
 * each module cache (Node's, and a test runner's own registry) with every distinct entry file in it.
 * Empty once resolution has run and found nothing to bridge (no `node:module`, or the library is not
 * installed), so later refusals cost nothing.
 */
let libraryLookups: readonly LibraryLookup[] | undefined;

/** Library classes this copy of the SDK has already tried to bridge, so a failure is not retried. */
const attemptedLibraryClasses = new WeakSet<object>();

/**
 * Whether `value` is an object whose prototype chain carries {@link REFUSAL_BRAND}. The brand is a
 * registry symbol, so any code can forge it; that is accepted because `instanceof` is no security
 * boundary. Reading it runs a Proxy's `get` trap, as `instanceof`'s own prototype walk runs its
 * `getPrototypeOf` trap.
 */
const isBridgedRefusal = (value: unknown): boolean =>
  (typeof value === 'object' || typeof value === 'function') &&
  value !== null &&
  (value as Record<symbol, unknown>)[REFUSAL_BRAND] === true;

/**
 * Makes `instanceof` against `standardwebhooks`' `WebhookVerificationError` match this SDK's refusals,
 * so a handler still importing the library's class keeps catching them after the move to the SDK.
 *
 * A refusal already extends the SDK's base error, and a prototype chain is linear, so the library's
 * class cannot be a second base the way it is in Python. The library's own `Symbol.hasInstance` is
 * what can answer instead, and is wrapped to accept refusals carrying {@link REFUSAL_BRAND}.
 *
 * The SDK never loads the library. It only bridges a copy the application has already loaded, found
 * in a module cache: Node's (`require.cache`, where an ESM `import` of the CommonJS-only library lands
 * too) and, in the CommonJS build, the registry of a test runner that hands each module its own
 * `require` (Jest). In each it looks under the entry the resolver gives from the working directory,
 * the entry script and this file, and under any file of a `standardwebhooks` package already in the
 * cache when the first refusal is raised (a workspace package's own copy, a nested one). Resolving
 * reads files but runs none, so a `node_modules` planted in an untrusted working directory is never
 * executed; requiring from there would be. The caches are checked on every refusal, a single lookup
 * per entry, so a library that resolves from the application and is loaded after the first refusal is
 * picked up by the next one.
 *
 * Feature-detected through `process.getBuiltinModule`, `process.mainModule` or this file's own
 * CommonJS `module`, never a static import or `require`, so no bundler tries to resolve the library and
 * browsers and edge runtimes, which have none of them, skip it. Where it cannot work (a copy bundled
 * into the application, or one an ES module application loads on Node before 20.16, on 21 or on 22
 * before 22.3), {@link isWebhookVerificationError} still recognises both classes. Any failure leaves
 * the refusal exactly as it was without the library.
 *
 * Patching the library's class is deliberate and process-wide, and there is no opt-out: it changes
 * that class's `instanceof` answer for every caller in the process, but only ever to add refusals,
 * which are a refused delivery in every sense a handler of the library's class relies on.
 */
const bridgeLibraryError = (): void => {
  let lookups: typeof libraryLookups;
  try {
    lookups = libraryLookups ?? resolveLibraryLookups();
  } catch {
    // A locked-down runtime (a `process` polyfill that throws): leave the error as is.
    return;
  }
  for (const lookup of lookups ?? []) {
    for (const entry of lookup.entries) {
      // Per entry, so one copy that cannot be patched (a frozen class) leaves the others bridged.
      try {
        const exported = lookup.cache[entry]?.exports as
          | { readonly WebhookVerificationError?: unknown }
          | undefined;
        const libraryClass = exported?.WebhookVerificationError;
        if (typeof libraryClass !== 'function' || attemptedLibraryClasses.has(libraryClass)) continue;
        attemptedLibraryClasses.add(libraryClass);
        // A class whose instances are refusals (this SDK's own, or another SDK's that a planted entry
        // re-exports) is never wrapped: the wrapper would make it match every other SDK's refusals too.
        if (isBridgedRefusal((libraryClass as { readonly prototype?: unknown }).prototype)) continue;
        if (Object.prototype.hasOwnProperty.call(libraryClass, BRIDGED_MARK)) continue;
        patchLibraryHasInstance(libraryClass);
      } catch {
        // A frozen class, or a getter that throws: this copy keeps its own answer.
      }
    }
  }
};

/**
 * This file's CommonJS `module`, or `undefined` where there is none: the ES module build, which Node
 * evaluates with no `module` in scope, and a bundle that gives the file no `require` of its own.
 *
 * Read through `typeof`, so the ES module build never throws a `ReferenceError` on it, and only ever
 * read, never assigned or called, so a bundler treats the file as it did before (esbuild, webpack and
 * Rollup emit no warning for it). It is what reaches a test runner's own module registry: Jest gives
 * each module a `require` whose `cache` is a view of the test file's registry, which Node's
 * `require.cache` never sees.
 */
const hostModuleOf = (): HostModule | undefined =>
  typeof module === 'object' && module !== null ? (module as HostModule) : undefined;

/**
 * The module-scope `require` a test runner hands this file, when it carries the `resolve` and `cache`
 * the bridge reads (Jest's does); `undefined` under Node, whose `module.require` has neither and
 * whose cache {@link nodeModuleOf} already reaches.
 */
const registryRequireOf = (host: HostModule | undefined): NodeRequire | undefined => {
  const candidate: unknown = host?.require;
  if (typeof candidate !== 'function') return undefined;
  const { resolve, cache } = candidate as { readonly resolve?: unknown; readonly cache?: unknown };
  return typeof resolve === 'function' && typeof cache === 'object' && cache !== null
    ? (candidate as NodeRequire)
    : undefined;
};

/**
 * Resolves the library's entry file in every module cache the bridge can reach, adds every file of
 * the library each cache already holds, and records the result in {@link libraryLookups}.
 *
 * Node's cache is reached through `node:module` (see {@link nodeModuleOf}), resolving from the working
 * directory and the entry script. A test runner's registry is reached through the `require` it hands
 * this file (see {@link registryRequireOf}), resolving from this file and the working directory.
 * Leaves {@link libraryLookups} unset where neither exists, so a runtime that swaps `process` back in
 * is still looked at; records an empty list once resolution has run and found no entry.
 */
const resolveLibraryLookups = (): typeof libraryLookups => {
  // Named apart from the `process` and `require` globals, so that nothing here reads to a bundler as
  // the CommonJS `require` of the library, whether or not it tracks scopes.
  const runtime = (globalThis as unknown as BridgeGlobals).process;
  const host = hostModuleOf();
  const registryRequire = registryRequireOf(host);
  const nodeModule = runtime === undefined ? undefined : nodeModuleOf(runtime, host);
  if (nodeModule === undefined && registryRequire === undefined) return undefined;
  const cwd = typeof runtime?.cwd === 'function' ? runtime.cwd() : undefined;
  /** Each `require` to resolve with, and the bases it resolves from; `undefined` is its own file. */
  const resolvers: { readonly require: NodeRequire; readonly bases: readonly (string | undefined)[] }[] = [];
  if (typeof nodeModule?.createRequire === 'function' && typeof cwd === 'string') {
    // The trailing separator makes `createRequire` treat the directory as the requiring location.
    const nodeRequire = nodeModule.createRequire(`${cwd}/`);
    const getBuiltinModule = runtime?.getBuiltinModule;
    /**
     * A builtin module by id, through `process.getBuiltinModule` or else the `require` made above. Only
     * ever asked for `node:fs`, so the `require` fallback runs no file either.
     */
    const builtin = (id: string): unknown =>
      typeof getBuiltinModule === 'function' ? getBuiltinModule(id) : nodeRequire(id);
    resolvers.push({ require: nodeRequire, bases: [cwd, ...entryScriptBases(runtime?.argv?.[1], builtin)] });
  }
  // Last, so where it is the same cache as Node's (a runner that hands out Node's own `require`) the
  // entries found above are kept and nothing is looked up twice.
  if (registryRequire) {
    resolvers.push({
      require: registryRequire,
      bases: typeof cwd === 'string' ? [undefined, cwd] : [undefined],
    });
  }
  const found = new Map<NodeRequire['cache'], Set<string>>();
  for (const { require: resolver, bases } of resolvers) {
    const entries = found.get(resolver.cache) ?? new Set<string>();
    found.set(resolver.cache, entries);
    for (const base of bases) {
      try {
        const options = base === undefined ? undefined : { paths: [base] };
        const entry = resolver.resolve(LIBRARY_ID, options);
        const manifest = resolver.resolve(`${LIBRARY_ID}/package.json`, options);
        if (isOwnPackageFile(entry, manifest)) entries.add(entry);
      } catch {
        // Not installed where this base looks: nothing to bridge from here.
      }
    }
    // A copy no base resolves to — a workspace package's unhoisted one, a nested one — is only found
    // loaded. The cache holds files the application already ran, so reading it runs nothing new.
    // Once, here: scanning on every refusal cost ~0.6 ms with 5,000 modules loaded.
    for (const [key, cached] of Object.entries(resolver.cache)) {
      if (!isLibraryCacheKey(key)) continue;
      // Per key, so one copy whose export throws when read (a getter, a Proxy) leaves the rest found.
      try {
        const exported = cached?.exports as { readonly WebhookVerificationError?: unknown } | undefined;
        if (typeof exported?.WebhookVerificationError === 'function') entries.add(key);
      } catch {
        // This copy cannot be read, so it cannot be bridged either.
      }
    }
  }
  libraryLookups = [...found]
    .filter(([, entries]) => entries.size > 0)
    .map(([cache, entries]) => ({ cache, entries: [...entries] }));
  return libraryLookups;
};

/**
 * `node:module`; `null` when `process.getBuiltinModule` has none to give; `undefined` where the runtime
 * offers no synchronous way to it.
 *
 * `process.getBuiltinModule` first (Node 20.16+ and 22.3+, Bun). Before it, a CommonJS module's
 * constructor is the `Module` class `node:module` exports: the application's entry module,
 * `process.mainModule`, which a CommonJS entry sets (reading it prints no deprecation warning), and
 * else this file's own `module` in the CommonJS build, which an ES module application that loads that
 * build still provides. So Node 20.0–20.15, 21 and 22.0–22.2 bridge there too. An ES module
 * application loading the ES module build has neither, and the only other way in, `import()`, is
 * asynchronous: it would leave the first refusal unbridged and put a dynamic import into every bundle
 * of the SDK, so that case is left to {@link isWebhookVerificationError}.
 */
const nodeModuleOf = (
  runtime: NonNullable<BridgeGlobals['process']>,
  host: HostModule | undefined,
): NodeModule | null | undefined => {
  if (typeof runtime.getBuiltinModule === 'function') {
    return (runtime.getBuiltinModule('node:module') as NodeModule | undefined) ?? null;
  }
  for (const candidate of [runtime.mainModule as HostModule | undefined, host]) {
    const constructor = candidate?.constructor as NodeModule | undefined;
    if (typeof constructor?.createRequire === 'function') return constructor;
  }
  return undefined;
};

/**
 * Whether a module-cache key is a file of a `standardwebhooks` package: the last `node_modules` in its
 * path is directly followed by the package's directory, so the file is the package's own and not one
 * of a package nested inside it, the same rule {@link isOwnPackageFile} applies to a resolved entry.
 */
const isLibraryCacheKey = (key: string): boolean => {
  const segments = key.replace(/\\/g, '/').split('/');
  const last = segments.lastIndexOf('node_modules');
  return last !== -1 && segments[last + 1] === LIBRARY_ID && segments.length > last + 2;
};

/**
 * Whether `entry` is a file of the package whose `package.json` is `manifest`: inside that package's
 * own directory, which sits directly in a `node_modules`, and not inside a package nested under it. A
 * `main` may point anywhere, even at another module the application has loaded, so a match anywhere
 * in the path is not enough.
 */
const isOwnPackageFile = (entry: string, manifest: string): boolean => {
  const file = entry.replace(/\\/g, '/');
  const root = manifest.replace(/\\/g, '/').replace(/\/package\.json$/, '');
  if (!root.endsWith(`/node_modules/${LIBRARY_ID}`) || !file.startsWith(`${root}/`)) return false;
  return !file
    .slice(root.length + 1)
    .split('/')
    .includes('node_modules');
};

/**
 * The entry script as given and, when it differs, its real path. Either is a usable resolution base:
 * the `node_modules` walk starts at the path itself (a directory entry such as `node /srv/app`) and
 * climbs through every parent (a file entry). The real path reaches the package a symlinked bin
 * belongs to.
 */
const entryScriptBases = (
  script: string | undefined,
  builtin: (id: string) => unknown,
): readonly string[] => {
  if (typeof script !== 'string' || script === '') return [];
  try {
    const fs = builtin('node:fs') as { readonly realpathSync?: (path: string) => string } | undefined;
    const real = typeof fs?.realpathSync === 'function' ? fs.realpathSync(script) : script;
    return real === script ? [script] : [script, real];
  } catch {
    // The script is gone or unreadable: the path as given is still worth resolving from.
    return [script];
  }
};

/**
 * Wraps `libraryClass`'s `Symbol.hasInstance` so it also accepts refusals carrying
 * {@link REFUSAL_BRAND}, deferring to whatever answered before for everything else, and marks the
 * class so no other copy of an SDK, and no reload of this one, wraps it again. The extra answer is
 * given only for `libraryClass` itself: a subclass inherits the static method, and a refusal is no
 * instance of a caller's own subclass.
 */
const patchLibraryHasInstance = (libraryClass: object): void => {
  const inherited: unknown = (libraryClass as unknown as Record<symbol, unknown>)[Symbol.hasInstance];
  const previous =
    typeof inherited === 'function'
      ? (inherited as (this: unknown, value: unknown) => boolean)
      : Function.prototype[Symbol.hasInstance];
  Object.defineProperty(libraryClass, Symbol.hasInstance, {
    configurable: true,
    /**
     * True for a bridged refusal when asked about `libraryClass` itself; anything else gets the answer
     * the class gave before.
     */
    value: function hasInstance(this: unknown, value: unknown): boolean {
      if (this === libraryClass && isBridgedRefusal(value)) return true;
      return previous.call(this, value);
    },
  });
  Object.defineProperty(libraryClass, BRIDGED_MARK, { value: true });
};

/**
 * Whether `error` is a refused webhook delivery: this SDK's {@link WebhookVerificationError} or a
 * subclass of it, from either build or any other copy of the SDK, or an `Error` named
 * `WebhookVerificationError`, as every copy of the `standardwebhooks` library's is.
 *
 * Use it where a handler catches both classes and `instanceof` against the library's cannot be relied
 * on. The SDK can only bridge a copy of the library it finds in a module cache it can reach, so a copy
 * bundled into the application, and every copy in a browser, an edge runtime or an ES module
 * application on Node before 20.16, on 21 or on 22 before 22.3, is not bridged. The SDK's own classes
 * are matched by the brand their prototype carries, which a subclass inherits whatever it names
 * itself. The library's class is matched by its name, which its constructor sets on every instance and
 * which survives minification, since nothing the SDK can read tells one copy of it from another; any
 * other verifier's error of that name is a refused delivery too, and matches as well. The name match
 * goes through `instanceof Error`, so a library error from another realm (a `vm` context, an iframe)
 * does not match; an SDK refusal from one does, by its brand.
 *
 * A true answer narrows to the SDK's class or to an `Error` of that name, not to the SDK's class
 * alone: the library's error carries none of the members the SDK's base error may add (a status code,
 * a response body), so a handler has to narrow further with `instanceof` before reading them. The class
 * is nominal (see {@link WebhookVerificationError}), so a false answer leaves an `Error`-typed value an
 * `Error`.
 */
export const isWebhookVerificationError = (
  error: unknown,
): error is WebhookVerificationError | (Error & { readonly name: 'WebhookVerificationError' }) =>
  typeof error === 'object' &&
  error !== null &&
  (isBridgedRefusal(error) || (error instanceof Error && error.name === 'WebhookVerificationError'));

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
