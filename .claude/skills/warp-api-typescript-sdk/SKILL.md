---
name: warp-api-typescript-sdk
description: "TypeScript SDK for Warp API. Use when writing TypeScript code that calls Warp API with the warp-hr package: installing it, constructing and authenticating the client, and calling API operations."
---

# Warp API TypeScript SDK

Generated TypeScript client for Warp API, published as `warp-hr`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install warp-hr
```

## Client setup and authentication

```ts
import WarpAPI from "warp-hr";

const client = new WarpAPI({
  apiKey: process.env["WARP_API_KEY"], // defaults to the WARP_API_KEY env var
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `apiKey` (env: `WARP_API_KEY`) — Credential for the apiKey scheme.

## Calling operations

```ts
import WarpAPI from "warp-hr";

const client = new WarpAPI({
  apiKey: process.env["WARP_API_KEY"], // defaults to the WARP_API_KEY env var
});

const list = await client.customFields.list();

console.log(list);
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](../../../api.md) before writing a call.

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from "warp-hr";

try {
  const list = await client.customFields.list();
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

## Reference files

- [README.md](../../../README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](../../../api.md) — complete catalogue of every operation with request and response types.
