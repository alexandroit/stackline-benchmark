# Upstream review

Based on [benchmark@2.1.4](https://www.npmjs.com/package/benchmark/v/2.1.4), commit [`061282627fdb7867d560729ca34b710fe8c48464`](https://github.com/bestiejs/benchmark.js/commit/061282627fdb7867d560729ca34b710fe8c48464). All published upstream runtime files match this commit byte-for-byte; npm tarball integrity was independently checked.

The fork preserves runtime files, exports, CLI names and engine declarations. Original license and authorship notices remain. Development tooling runs on Node24 without raising the package runtime requirement.

## Issue triage (2026-09-29)

- [#176: Promise-returning benchmarks](https://github.com/bestiejs/benchmark.js/issues/176): Preserve the documented defer:true / deferred.resolve() contract. Sync and explicit deferred benchmarks are exercised; automatic Promise-return detection is not claimed.
- [#264: Asynchronous memory use](https://github.com/bestiejs/benchmark.js/issues/264): Use bounded benchmark options in regression checks. No unsupported claim about a universal memory limit is made.
- [#191: Jest/browser environment detection](https://github.com/bestiejs/benchmark.js/issues/191): Preserve the runtime detection implementation. Node and packed-consumer execution are verified; arbitrary Jest environments remain upstream-specific.

No upstream maintainers were contacted. These are scoped compatibility decisions, not blanket claims that upstream issues are fixed.

## Verification

`npm ci --ignore-scripts`, `npm test`, `npm run test:package`, and `npm audit --audit-level=low`. CI and CodeQL gate the exact immutable package artifact. Packed consumer tests install the resulting archive before exercising its public behavior.
