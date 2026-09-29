# @stackline/benchmark

> A benchmarking library that supports high-resolution timers & returns statistically significant results.

[![npm version](https://img.shields.io/npm/v/@stackline/benchmark.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/benchmark)
[![license](https://img.shields.io/npm/l/@stackline/benchmark.svg?style=flat-square)](https://github.com/alexandroit/stackline-benchmark)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-benchmark-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-benchmark)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/benchmark/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/benchmark/)** | **[npm](https://www.npmjs.com/package/@stackline/benchmark)** | **[Issues](https://github.com/alexandroit/stackline-benchmark/issues)** | **[Repository](https://github.com/alexandroit/stackline-benchmark)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/benchmark` is the Stackline-maintained distribution of `benchmark@2.1.4`. It is an independent continuation of [benchmark](https://github.com/bestiejs/benchmark.js); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/benchmark@1.0.1` |
| API target | `benchmark@2.1.4` |
| Supported Node.js | `See supported framework requirements` |
| License | `MIT` |
| Main entry | `benchmark.js` |
| Runtime dependencies | `lodash, platform` |

## Installation

```bash
npm install @stackline/benchmark
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install benchmark@npm:@stackline/benchmark
```

## Usage and API reference

### Benchmark.js v2.1.4

A [robust](https://mathiasbynens.be/notes/javascript-benchmarking "Bulletproof JavaScript benchmarks") benchmarking library that supports high-resolution timers & returns statistically significant results. As seen on [jsPerf](https://jsperf.com/).

## Documentation

* [API Documentation](https://benchmarkjs.com/docs)

## Download

 * [Development source](https://raw.githubusercontent.com/bestiejs/benchmark.js/2.1.4/benchmark.js)

## Installation

Benchmark.js’ only hard dependency is [lodash](https://lodash.com/).
Include [platform.js](https://mths.be/platform) to populate [Benchmark.platform](https://benchmarkjs.com/docs#platform).

In a browser:

```html
<script src="lodash.js"></script>
<script src="platform.js"></script>
<script src="benchmark.js"></script>
```

In an AMD loader:

```js
require({
  'paths': {
    '@stackline/benchmark': 'path/to/benchmark',
    'lodash': 'path/to/lodash',
    'platform': 'path/to/platform'
  }
},
['@stackline/benchmark'], function(Benchmark) {/*…*/});
```

Using npm:

```shell
$ npm i --save @stackline/benchmark
```

In Node.js:

```js
var Benchmark = require('@stackline/benchmark');
```

Optionally, use the [microtime module](https://github.com/wadey/node-microtime) by Wade Simmons:

```shell
npm i --save microtime
```

Usage example:

```js
var suite = new Benchmark.Suite;

// add tests
suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf
```

## Support

Tested in Chrome 54-55, Firefox 49-50, IE 11, Edge 14, Safari 9-10, Node.js 6-7, & PhantomJS 2.1.1.

## BestieJS

Benchmark.js is part of the BestieJS *“Best in Class”* module collection. This means we promote solid browser/environment support, ES5+ precedents, unit testing, & plenty of documentation.

## Credits and original authors

- Original project: [benchmark](https://github.com/bestiejs/benchmark.js).
- Mathias Bynens.
- John-David Dalton.
- Kit Cambridge.
- Copyright 2010-2016 Mathias Bynens <https://mathiasbynens.be/>.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-benchmark).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
