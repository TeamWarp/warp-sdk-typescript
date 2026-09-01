---
name: warp-typescript-sdk
description: "TypeScript SDK for warp API. Use when writing TypeScript code that calls warp API with the warp-hr package: installing it, constructing and authenticating the client, and calling API operations."
---

# warp TypeScript SDK

Generated TypeScript client for warp API, published as `warp-hr`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install warp-hr
```

## Client setup and authentication

```ts
import Warp from 'warp-hr';

const client = new Warp({
  apiKey: process.env['WARP_API_KEY'], // defaults to the WARP_API_KEY env var
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `apiKey` (env: `WARP_API_KEY`) — Credential for the apiKey scheme.

## Calling operations

```ts
import Warp from 'warp-hr';

const client = new Warp({
  apiKey: process.env['WARP_API_KEY'], // defaults to the WARP_API_KEY env var
});

const healthPlan = await client.benefits.healthPlans.list({
  limit: 'limit',
  statuses: ['active'],
});

console.log(healthPlan);
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](./api.md) before writing a call.

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from 'warp-hr';

try {
  const healthPlan = await client.benefits.healthPlans.list({
    limit: 'limit',
    statuses: ['active'],
  });
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

- [README.md](./README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](./api.md) — complete catalogue of every operation with request and response types.
