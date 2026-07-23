# Changelog

## 0.16.0 (2026-07-23)

Full Changelog: [v0.15.0...v0.16.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.15.0...v0.16.0)

### Features

* **api:** api update ([6639f73](https://github.com/TeamWarp/warp-sdk-typescript/commit/6639f73147059dc9b7676c3396fa232bd965a8eb))
* **api:** api update ([18c6ef3](https://github.com/TeamWarp/warp-sdk-typescript/commit/18c6ef3b0801c064089c5f89ae6d684292d7b925))
* **api:** api update ([5ef161c](https://github.com/TeamWarp/warp-sdk-typescript/commit/5ef161c9049dcf3e9a5cab20b44a593ba9f28656))
* **stlc:** configurable CI runner and private-production-repo support in workflow templates ([9703178](https://github.com/TeamWarp/warp-sdk-typescript/commit/970317808ede653f2b6769a1d7c15eb50a79c8d1))
* support setting headers via env ([e33771c](https://github.com/TeamWarp/warp-sdk-typescript/commit/e33771cdda169e5f9c3d5e44a1e77b8258fc774b))


### Bug Fixes

* **ci:** bump @arethetypeswrong/cli to ^0.18.0 and run CI workflows on Node 24 ([7b65317](https://github.com/TeamWarp/warp-sdk-typescript/commit/7b653177e141d83af7e895325872f733845b580c))
* **client:** send content-type header for requests with an omitted optional body ([c81e841](https://github.com/TeamWarp/warp-sdk-typescript/commit/c81e84105162d80aadb979ece12cc322c2c39633))
* **typescript:** upgrade tsc-multi so that it works with Node 26 ([72a21bb](https://github.com/TeamWarp/warp-sdk-typescript/commit/72a21bb1618c81058a8337a214c45c02816bb2b6))


### Chores

* avoid formatting file that gets changed during releases ([0698cde](https://github.com/TeamWarp/warp-sdk-typescript/commit/0698cde758eb58f4ec0ec0c78a6d1b575fc60f59))
* **ci:** escape input path in publish-npm workflow ([395652f](https://github.com/TeamWarp/warp-sdk-typescript/commit/395652f87e0c780291d5b3846aa83dfd093e2532))
* **format:** run eslint and prettier separately ([b02da77](https://github.com/TeamWarp/warp-sdk-typescript/commit/b02da7708a54335713e4a99541a231aede18a461))
* **internal:** codegen related update ([95c4dd5](https://github.com/TeamWarp/warp-sdk-typescript/commit/95c4dd57ec4231174da3f182273a2019c00a7a44))
* **internal:** codegen related update ([b2d7549](https://github.com/TeamWarp/warp-sdk-typescript/commit/b2d7549ab6d87db0e4448ada730dde2c6a54299f))
* **internal:** fix MCP server import ordering ([bab5733](https://github.com/TeamWarp/warp-sdk-typescript/commit/bab573355b4130ebc9d842dbf85a69674aabb11d))
* **internal:** improve local docs search for MCP servers ([4d56c89](https://github.com/TeamWarp/warp-sdk-typescript/commit/4d56c892d50b97509e7574921b844917d9cafc01))
* **internal:** improve local docs search for MCP servers ([f6b280d](https://github.com/TeamWarp/warp-sdk-typescript/commit/f6b280dff441d494e64c03a2bc19f6c4046c551a))
* **internal:** more robust bootstrap script ([b5e3ead](https://github.com/TeamWarp/warp-sdk-typescript/commit/b5e3eade9e66b8dabb28cfd5c30b8ea0dd792a7a))
* **internal:** show error causes in MCP servers when running in local mode ([e819191](https://github.com/TeamWarp/warp-sdk-typescript/commit/e819191237b344e1278ed9c53103c8d02e882a7b))
* **internal:** support local docs search in MCP servers ([ba624b2](https://github.com/TeamWarp/warp-sdk-typescript/commit/ba624b26e2536dc5ff13b56f5af9c02256dd431e))
* **internal:** support type annotations when running MCP in local execution mode ([978022a](https://github.com/TeamWarp/warp-sdk-typescript/commit/978022a79f78e8a64fb4ee603d6b42cf66fd070f))
* **internal:** update docs ordering ([751ac98](https://github.com/TeamWarp/warp-sdk-typescript/commit/751ac98e02dddf059a99f61a31e326aead6e15c9))
* **mcp-server:** add support for session id, forward client info ([d3210d3](https://github.com/TeamWarp/warp-sdk-typescript/commit/d3210d30aa8697125a3f973782962d38d00b597a))
* **mcp-server:** increase local docs search result count from 5 to 10 ([1fc1858](https://github.com/TeamWarp/warp-sdk-typescript/commit/1fc185836f7b576aec4a50f105b9e475411504c8))
* **mcp-server:** log client info ([96ffc12](https://github.com/TeamWarp/warp-sdk-typescript/commit/96ffc12a533fec8bd8048a88c8ddd4c5261eafdf))
* redact api-key headers in debug logs ([8149edf](https://github.com/TeamWarp/warp-sdk-typescript/commit/8149edfc8d09609f20d1c10aa9c32d61d7517035))
* restructure docs search code ([4b3fc2f](https://github.com/TeamWarp/warp-sdk-typescript/commit/4b3fc2f37d977829b7b89cba192fd49aba8dd409))
* **tests:** remove redundant File import ([90931f9](https://github.com/TeamWarp/warp-sdk-typescript/commit/90931f9c0519510cd5df4fafefa79628f18b1f15))
* update CLI documentation ([26e0191](https://github.com/TeamWarp/warp-sdk-typescript/commit/26e01913deb3de71af450180ff2fb36b612c0d6d))


### Documentation

* update examples ([df16b92](https://github.com/TeamWarp/warp-sdk-typescript/commit/df16b929bdbe6f26388072b75a055bc8f9e2917e))
* update http mcp docs ([2ec172f](https://github.com/TeamWarp/warp-sdk-typescript/commit/2ec172fb2d6a65ff9c122fc845afb2e1ed0df56f))

## 0.15.0 (2026-03-27)

Full Changelog: [v0.14.0...v0.15.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.14.0...v0.15.0)

### Features

* **api:** update import names to warp ([0516548](https://github.com/TeamWarp/warp-sdk-typescript/commit/05165483de55dde02a71aa8a1c050279696ba2c4))

## 0.14.0 (2026-03-27)

Full Changelog: [v0.13.0...v0.14.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.13.0...v0.14.0)

### Features

* **api:** update contact email ([fdf3472](https://github.com/TeamWarp/warp-sdk-typescript/commit/fdf347290de23b31338961be2e9307e3dd3989e6))

## 0.13.0 (2026-03-27)

Full Changelog: [v0.12.2...v0.13.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.12.2...v0.13.0)

### Features

* **api:** api update ([3571657](https://github.com/TeamWarp/warp-sdk-typescript/commit/3571657ca4f42118fd0cffb7e6a9a9747254d817))

## 0.12.2 (2026-03-27)

Full Changelog: [v0.12.1...v0.12.2](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.12.1...v0.12.2)

### Chores

* configure new SDK language ([4960173](https://github.com/TeamWarp/warp-sdk-typescript/commit/4960173908a0897976b4cd1af0cbb0fef07f910e))

## 0.12.1 (2026-03-25)

Full Changelog: [v0.12.0...v0.12.1](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.12.0...v0.12.1)

### Chores

* **ci:** skip lint on metadata-only changes ([7ea1ebb](https://github.com/TeamWarp/warp-sdk-typescript/commit/7ea1ebbcb6054f3c3933d40ba31c428f8f740731))
* **internal:** update gitignore ([3c732da](https://github.com/TeamWarp/warp-sdk-typescript/commit/3c732dafffa225fdbfe512136af35506fef71059))

## 0.12.0 (2026-03-23)

Full Changelog: [v0.11.0...v0.12.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.11.0...v0.12.0)

### Features

* **api:** api update ([154e6e0](https://github.com/TeamWarp/warp-sdk-typescript/commit/154e6e0a2d02c699ec7a20543e0075a481ed49be))

## 0.11.0 (2026-03-19)

Full Changelog: [v0.10.0...v0.11.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.10.0...v0.11.0)

### Features

* **api:** api update ([611d59d](https://github.com/TeamWarp/warp-sdk-typescript/commit/611d59d14fc9e7bdb1ad14b21b799c942e08c5d1))
* **api:** worker invite endpoints ([47841b2](https://github.com/TeamWarp/warp-sdk-typescript/commit/47841b2efbd1c65723aed00407537091203f7712))


### Chores

* **internal:** tweak CI branches ([d6c7a54](https://github.com/TeamWarp/warp-sdk-typescript/commit/d6c7a54643e740421b41365b944c5a29272826ea))

## 0.10.0 (2026-03-13)

Full Changelog: [v0.9.0...v0.10.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.9.0...v0.10.0)

### Features

* **api:** api update ([0789362](https://github.com/TeamWarp/warp-sdk-typescript/commit/078936253cfe0ba950cf71b9480ffc61aa644f78))
* **api:** workplaces api ([bd204c2](https://github.com/TeamWarp/warp-sdk-typescript/commit/bd204c29f6af128fa333fdf7295143a7f309ca7e))


### Chores

* **internal:** update dependencies to address dependabot vulnerabilities ([200d12e](https://github.com/TeamWarp/warp-sdk-typescript/commit/200d12e6a0f6593475576b88ff1bede12660dd51))

## 0.9.0 (2026-03-09)

Full Changelog: [v0.8.0...v0.9.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.8.0...v0.9.0)

### Features

* **api:** add departments ([59ab2f8](https://github.com/TeamWarp/warp-sdk-typescript/commit/59ab2f87d5173f2f5564c35d06fc2c9b96568510))

## 0.8.0 (2026-03-09)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.7.0...v0.8.0)

### Features

* **api:** api update ([4fd9214](https://github.com/TeamWarp/warp-sdk-typescript/commit/4fd921447c9a244f7ff29a3b0c5ef1b5e9057943))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([0a20277](https://github.com/TeamWarp/warp-sdk-typescript/commit/0a2027791f3ea781c94410ece36aa43970166032))
* **client:** avoid removing abort listener too early ([6334b05](https://github.com/TeamWarp/warp-sdk-typescript/commit/6334b058dc22ad755927ad17c8f9453215787fb8))
* **client:** preserve URL params already embedded in path ([dbeef70](https://github.com/TeamWarp/warp-sdk-typescript/commit/dbeef7072a9991875cce70f08c19602a3476c52c))
* **docs/contributing:** correct pnpm link command ([ba2125e](https://github.com/TeamWarp/warp-sdk-typescript/commit/ba2125e0c1949983495dec1a357ee70154a1b9b2))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([1a21033](https://github.com/TeamWarp/warp-sdk-typescript/commit/1a21033b3b89bb2bae665f1955495f827eafe5e1))
* **ci:** upgrade `actions/github-script` ([f8bb3d6](https://github.com/TeamWarp/warp-sdk-typescript/commit/f8bb3d602a19a79c1216da53affbd4df23c86a17))
* **client:** do not parse responses with empty content-length ([6d95c4f](https://github.com/TeamWarp/warp-sdk-typescript/commit/6d95c4f77551754af115784737d2c589418d4731))
* **client:** restructure abort controller binding ([509a391](https://github.com/TeamWarp/warp-sdk-typescript/commit/509a391ae56e78fe6a7f6526efe8a791e7c2dd10))
* **internal/client:** fix form-urlencoded requests ([3f8035c](https://github.com/TeamWarp/warp-sdk-typescript/commit/3f8035cc0ffd99625e7426fd40c373d824e06747))
* **internal:** avoid type checking errors with ts-reset ([8721da6](https://github.com/TeamWarp/warp-sdk-typescript/commit/8721da6794454aaad9d71636c87a61568dab1e3c))
* **internal:** codegen related update ([2d54d63](https://github.com/TeamWarp/warp-sdk-typescript/commit/2d54d631896105a77d3ad892825de04ea524a315))
* **internal:** codegen related update ([ad0e598](https://github.com/TeamWarp/warp-sdk-typescript/commit/ad0e59898a040d99d27034227ace52850d4aeb61))
* **internal:** fix pagination internals not accepting option promises ([9b48950](https://github.com/TeamWarp/warp-sdk-typescript/commit/9b4895093468ea7c404d9d22ff6d87f12a7eba69))
* **internal:** move stringifyQuery implementation to internal function ([c83ef1d](https://github.com/TeamWarp/warp-sdk-typescript/commit/c83ef1d51da255652f6b3e5437159d441026f8df))
* **internal:** remove mock server code ([91018fa](https://github.com/TeamWarp/warp-sdk-typescript/commit/91018faca5e333f549815977fc9094facea756a9))
* **internal:** update `actions/checkout` version ([5bc4791](https://github.com/TeamWarp/warp-sdk-typescript/commit/5bc4791eee1af12a367d7389ac6de00844533a00))
* **internal:** update lock file ([51232f5](https://github.com/TeamWarp/warp-sdk-typescript/commit/51232f5858352f99b211ecc6ebe4ac52b8f1bdf0))
* **internal:** upgrade babel, qs, js-yaml ([d3679bf](https://github.com/TeamWarp/warp-sdk-typescript/commit/d3679bfd7a2a42d604d1226a3d005a6cde6f417f))
* **internal:** upgrade brace-expansion and @babel/helpers ([e0a6c06](https://github.com/TeamWarp/warp-sdk-typescript/commit/e0a6c06ea13d7e45991831f641f5adc76ab9e4ba))
* **internal:** upgrade pnpm ([3844311](https://github.com/TeamWarp/warp-sdk-typescript/commit/38443118947be431b8c1aab5987f04a019a37d66))
* **internal:** upgrade pnpm version ([9317175](https://github.com/TeamWarp/warp-sdk-typescript/commit/9317175831dc7419fb662062135cb4a7b212d9de))
* update mock server docs ([64c5bcd](https://github.com/TeamWarp/warp-sdk-typescript/commit/64c5bcd7052d0afb0721fca3a52f263944d3eef5))

## 0.7.0 (2026-01-09)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.6.0...v0.7.0)

### Features

* **api:** api update ([a7141ab](https://github.com/TeamWarp/warp-sdk-typescript/commit/a7141ab4a82e94f0c80f8ed42b58eac3b8d47a1a))


### Chores

* break long lines in snippets into multiline ([1c73c3d](https://github.com/TeamWarp/warp-sdk-typescript/commit/1c73c3d81f172c98a3a8f3878a3ad1348d606db6))

## 0.6.0 (2026-01-06)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.5.0...v0.6.0)

### Features

* **api:** api update ([95bb8af](https://github.com/TeamWarp/warp-sdk-typescript/commit/95bb8afac6cddeed767934feaa42eee3ddbf74f8))


### Bug Fixes

* **api:** query settings array format repeat ([b171d95](https://github.com/TeamWarp/warp-sdk-typescript/commit/b171d9587efa085b1065b9e33498dc41dd15c4be))

## 0.5.0 (2026-01-05)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.4.0...v0.5.0)

### Features

* **api:** api update ([2d1d6af](https://github.com/TeamWarp/warp-sdk-typescript/commit/2d1d6afd181b9027ea4859609918dcc32b5cbf59))
* **api:** api update ([70f9d02](https://github.com/TeamWarp/warp-sdk-typescript/commit/70f9d027779b65cbcb0b5d3da304ca6675dc7108))

## 0.4.0 (2025-12-26)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.3.0...v0.4.0)

### Features

* **api:** api update ([ea9020e](https://github.com/TeamWarp/warp-sdk-typescript/commit/ea9020ede4440daf459c8e7f3073b483201dce96))
* **api:** manual updates ([775b5f0](https://github.com/TeamWarp/warp-sdk-typescript/commit/775b5f0cc7545ce3770e201bd9c1f45e53123ff4))

## 0.3.0 (2025-12-26)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.2.0...v0.3.0)

### Features

* **api:** api update ([b631ad9](https://github.com/TeamWarp/warp-sdk-typescript/commit/b631ad9d2e27c422838a8ebebca4c43a73b5517a))
* **api:** pagination configuration ([deb6f49](https://github.com/TeamWarp/warp-sdk-typescript/commit/deb6f49681b2b3c1c417e6866ad03f8ce2878fe8))

## 0.2.0 (2025-12-26)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.1.0...v0.2.0)

### Features

* **api:** api update ([eeaadd0](https://github.com/TeamWarp/warp-sdk-typescript/commit/eeaadd0320da4b747cb7db785ba274b79c2e2873))

## 0.1.0 (2025-12-24)

Full Changelog: [v0.0.2...v0.1.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.0.2...v0.1.0)

### Features

* **api:** api update ([bc90d84](https://github.com/TeamWarp/warp-sdk-typescript/commit/bc90d84aa48470eb689eeb6cc61dc290dca17a4c))

## 0.0.2 (2025-12-24)

Full Changelog: [v0.0.1...v0.0.2](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.0.1...v0.0.2)

### Chores

* update SDK settings ([8fa3b78](https://github.com/TeamWarp/warp-sdk-typescript/commit/8fa3b7824caef5ac0970c820acf2c7fe0c2845b4))
* update SDK settings ([b3d641e](https://github.com/TeamWarp/warp-sdk-typescript/commit/b3d641e8fa826a14a68b20704845a9f51149b6d0))
