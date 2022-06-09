# @typedash/typedash

## 11.6.0

### Minor Changes

- 2eb74d2: ✨ Add monadic bind methods to exported monads: Either, Option

## 11.5.0

### Minor Changes

- f32eefb: ✨ Add Apply and Sequence functions.

## 11.4.1

### Patch Changes

- 278cb8d: ⬆️ Update `zod` to latest version: 3.14.2

## 11.4.0

### Minor Changes

- 51288c8: ➕ Add `mergeDeepLeft` and `mergeDeepRight` export to Record.

## 11.3.0

### Minor Changes

- 9bd365a: 🧶 String case methods.

## 11.2.2

### Patch Changes

- 9af5998: 📜 JSDoc ESLint plugin, added array-type style.

## 11.2.1

### Patch Changes

- eadfc28: 🧹 Implemented new standard eslint config.

## 11.2.0

### Minor Changes

- ee35b68: Export `tryCatch` and `tryCatchK` methods for package consumers to use.

## 11.1.1

### Patch Changes

- bb62e41: ✨ Added new JSON module.

## 11.1.0

### Minor Changes

- bb4a7d9: ➕ Add `A.shuffleWithSeed` and `A.groupBy`.

## 11.0.0

### Major Changes

- 322048e: ❌ Remove non unary lodash functions.

## 10.0.0

### Major Changes

- fbfad2f: ➕ Add `A.shuffle` and `A.groupWith`. ❌ Remove `R.propEq`

## 9.0.0

### Major Changes

- f57c6db: ⬆️ Upgrade to latest version of `fp-ts-std`.

  - [`fp-ts-std` updated `replaceAll` to no longer accepts a `RegExp` to be compliant with Node <15.](<(https://github.com/samhh/fp-ts-std/blob/master/CHANGELOG.md#0131-2022-01-16)>)
    > To use a RegExp (with a global flag) instead of a string to match, use replace in fp-ts/string instead.
  - Add missing `peerDependencies` from `fp-ts-std`. These are not currently used but are
    good to have in place if we ever use something from `fp-ts-std` that requires one of these libraries.

### Patch Changes

- 4c69efa: 🔥 Remove `monocle-ts` `Lens` usage in `R.prop` implementation

## 8.0.1

### Patch Changes

- 631076f: 🛠️ Include `src` in packaged contents so sourcemaps work at consumer

## 8.0.0

### Major Changes

- d38b3ae: 💥 Export `@typedash/typedash` namespaces from the top level of the package.

  ```diff
  - import * as A from '@typedash/typedash/Array'
  - import * as O from '@typedash/typedash/Option'
  - import * as R from '@typedash/typedash/Record'
  + import {A, O, R} from '@typedash/typedash'
  ```

## 7.0.0

### Major Changes

- c562adb: ❌ Deprecate `R.path`. ➕ Add `R.prop`.

  Breaking Changes:

  Replace `R.path` usages with `R.prop`.

  ```diff
   pipe(
       { foo: 'lorem' },
  -    R.path(['foo'])
  +    R.prop('foo')
   )
   ...
  pipe(
       { foo: { bar: 5 } },
  -    R.path(['foo', 'bar'])
  +    R.prop('foo'),
  +    R.prop('bar')
   )
  ```

## 6.0.0

### Major Changes

- cf30e66: ❌ Remove `R.prop` and `R.propOr` in favor of `R.path` and `R.pathOr`.

## 5.0.0

### Major Changes

- 50639ac: ➕ Added baseline methods for all existing `utils` modules.

  - ⚠️ `contains` and `contained` have been renamed to `includes` and `included`.

## 4.6.0

### Minor Changes

- cc8b0c6: ➕ Add `Either` namespace.

## 4.5.13

### Patch Changes

- ce68884: 📌 Pin @types/ramda back at 0.27.1.

## 4.5.12

### Patch Changes

- d59ddcc: 📌 Pin @types/ramda version, add `tap` to `utils` package.

## 4.5.11

### Patch Changes

- 70266d2: ➖ `NonEmptyArray.lookup` now accepts negative values

## 4.5.10

### Patch Changes

- 4758857: 🏋️‍♂️ Support methods for FB-12508

  - `NonEmptyArray`
    - ➕ `fromReadonlyNonEmptyArray` added from `fp-ts`.
    - ✏️ `isOutOfBound` added as an internal helper method.
    - ✨ `lookup` implemented to grab values out of a `NEA`
  - `Record`
    - ➕ `mergeAll` added from `ramda`.
  - `string`
    - ➕ `concat` added from `ramda`.
    - ✨ `prepend` implemented an an ergonomic alternative to `concat`
    - ✨ `append` implemented an an ergonomic alternative to `concat`
  - `function`
    - ➕ `flip` added from `ramda`

## 4.5.9

### Patch Changes

- 9a5b6aa: Dummy change

  - it wasn't

## 4.5.8

### Patch Changes

- bfa7432: version bump

## 4.5.7

### Patch Changes

- ce28a54: version bump

## 4.5.6

### Patch Changes

- 53990001: version bump

## 4.5.5

### Patch Changes

- abc84bf: 🤜 Version bump.

## 4.5.4

### Patch Changes

- 73ff1dc: 🤜 Version bump.
- dee3f3e: 📜 Tweak README.

## 4.5.3

### Patch Changes

- 4b828fe: 🤜 Version bump.

## 4.5.2

### Patch Changes

- 750c6ce: 🤜 Version bump.

## 4.5.1

### Patch Changes

- 7fc3372: 🤜 Version bump to test publish in Travis 🤞.

## 4.5.0

### Minor Changes

- b94308b: 🦋 `changesets` implemtation cleanup.

  - 💅 Prettier configutation and `format` command.
  - 🧹 Cleanup changelogs of version bump noise.

## 4.4.2

### Patch Changes

- 6c3d41a: ✨ Modern monorepo tooling!

  - 🧵 Move from `npm` to `yarn 2`/`yarn berry`
  - 🦋 Move from `lerna` to `yarn 2/`yarn berry`and`changesets`
  - 📜 Reset CHANGELOGs in all packages
