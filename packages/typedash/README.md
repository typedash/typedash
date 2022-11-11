# @typedash/typedash

This package houses domain agnostic utility functions that can be used in any project/package. This is the centralized place where you can get util
functions without needing to know which underlying package it's coming from.

Everything in this package should be curried/auto-curried, take data last, follow similar patterns as `lodash/fp`, `ramda`, `ramda-adjunct`, `fp-ts`,
and have thorough test coverage.

## Installation

```sh
npm install @typedash/typedash
yard add --save @typedash/typedash
```

## Organization

Utility functions are organized based on the type of data they work on. If they don't fit into a group (`pipe`, `flow`, `ifElse`, etc) then they will be exported as bare functions at the root. To encourage cohesiveness, modules have been collected and exported under a reserved abbreviation. See below for the mapping. In each module, you'll find a `_external.ts` file that houses all the external methods we're re-exporting. Any custom methods that aren't covered by the utils mentioned above are alongside that with tests and exported from the `index.ts`. The root of the `src` directory enforces common abbreviations that are loosely tied to how `fp-ts` organizes itself.

| Module Name     | Abbreviation | Note                            |
| --------------- | ------------ | ------------------------------- |
| `function`      | N/A          | Bare word exports, no namespace |
| `Array`         | `A`          |                                 |
| `NonEmptyArray` | `NEA`        |                                 |
| `Option`        | `O`          |                                 |
| `Promise`       | `P`          |                                 |
| `Record`        | `R`          | AKA `Object` methods            |
| `String`        | `S`          |                                 |

## Example

Below is an example of how you would/could use this package in your project.

```ts
import { A, R, pipe, double } from '@typedash/typedash'

A.join(', ')(['foo', 'bar']) // 'foo, bar'

R.map((x) => x * 2)({ foo: 5, bar: 6 }) // { foo: 10, bar: 12 }
A.map(double)([5, 6]) // [10, 12]

pipe(
  [5, 6, 5, 10],
  A.map(double),
  A.filter(equal(10)),
  A.map(toString),
  A.join(', '),
) // '10, 10'
```

## Adding functions

Add functions as you see fit, but be careful of conflicting names. As a base, `fp-ts` functions should b preferred as they are generally safer than the other utility libraries. From there, you can grab methods from other externals and export them by name. Can't find something you need in any of the current externals (see [External References](#external-references))? Implement your own in a _separate file_ inside the appropriate data module and export it in that module's `index.ts`. **Be sure not to override an existing function name!**

## External References

| Package         | Docs Url                                              |
| --------------- | ----------------------------------------------------- |
| `fp-ts`         | https://gcanti.github.io/fp-ts/modules/               |
| `fp-ts-std`     | https://github.com/samhh/fp-ts-std                    |
| `ramda`         | https://ramdajs.com/docs/                             |
| `ramda-adjunct` | https://char0n.github.io/ramda-adjunct/2.23.0/RA.html |
| `lodash/fp`     | https://github.com/lodash/lodash/wiki/FP-Guide        |
