## Setting up the environment

To set up the repository, run:

```sh
$ npm install
$ npm run build
```

This will install all the required dependencies and build output files to `dist/`.

## Modifying/Adding code

Most of this SDK is generated from our OpenAPI specification by [Scalar](https://scalar.com). Changes to generated files may be overwritten the next time the SDK is regenerated, so prefer updating the source specification for API-driven changes.

## Type-checking

```sh
$ npm run typecheck
```

## Using the repository from source

If you'd like to use the repository from source, you can either install from git or link to a cloned repository:

To install via git:

```sh
$ npm install git+ssh://git@github.com:TeamWarp/warp-sdk-typescript.git
```

Alternatively, to link a local copy of the repo:

```sh
# Clone
$ git clone https://www.github.com/TeamWarp/warp-sdk-typescript
$ cd warp-sdk-typescript

# Link
$ npm link
$ cd ../my-package
$ npm link warp-hr
```

## Publishing and releases

Releases are published to npm automatically when a GitHub release is published, via the [`TypeScript SDK Release`](https://www.github.com/TeamWarp/warp-sdk-typescript/actions/workflows/sdk-release.yml) workflow.
