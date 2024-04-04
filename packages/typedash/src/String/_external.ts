// https://gcanti.github.io/fp-ts/modules/string.ts.html
export {
  empty,
  endsWith,
  Eq,
  includes,
  isEmpty,
  isString,
  Monoid,
  Ord,
  replace,
  size,
  slice,
  split as splitRNEA,
  startsWith,
  toLowerCase,
  toUpperCase,
  trim,
  trimLeft,
  trimRight,
} from 'fp-ts/string'

// https://samhh.github.io/fp-ts-std/modules/String.ts.html
export {
  append,
  dropLeft,
  dropLeftWhile,
  dropPrefix,
  dropRight,
  dropRightWhile,
  dropSuffix,
  fromBool,
  fromNumber,
  head,
  init,
  isAlpha,
  isAlphaNum,
  isLower,
  isSpace,
  isUpper,
  last,
  lines,
  lookup,
  match,
  matchAll,
  prepend,
  replaceAll,
  reverse,
  splitAt,
  surround,
  tail,
  takeLeft,
  takeLeftWhile,
  takeRight,
  takeRightWhile,
  test,
  unappend,
  under,
  unlines,
  unprepend,
  unsurround,
  unwords,
  words,
} from 'fp-ts-std/String'

export { equals, concat } from 'ramda'
export { padEnd, padStart, padCharsEnd, padCharsStart } from 'ramda-adjunct'

/**
 * @description Deprecated.
 * @deprecated Use N.integerFromString / N.integerFromString_UNSAFE
 * @example
 * pipe(
 *   '5.5',
 *   N.integerFromString,
 * ) // O.some(5)
 * pipe(
 *   '5.5',
 *   N.integerFromString_UNSAFE,
 * ) // 5
 */
export const toInteger = (): undefined => undefined
