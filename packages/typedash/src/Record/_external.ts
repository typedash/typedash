// https://gcanti.github.io/fp-ts/modules/Record.ts.html
export {
  collect,
  compact,
  deleteAt,
  difference,
  elem,
  every,
  filter,
  filterMap,
  filterMapWithIndex,
  filterWithIndex,
  flap,
  foldMap,
  foldMapWithIndex,
  fromEntries,
  fromFoldable,
  fromFoldableMap,
  getDifferenceMagma,
  getEq,
  getFoldable,
  getFoldableWithIndex,
  getIntersectionSemigroup,
  getMonoid,
  getShow,
  getTraversable,
  getTraversableWithIndex,
  getUnionMonoid,
  getUnionSemigroup,
  getWitherable,
  has,
  intersection,
  isEmpty,
  isSubrecord,
  keys,
  lookup,
  map,
  mapWithIndex,
  modifyAt,
  partition,
  partitionMap,
  partitionMapWithIndex,
  partitionWithIndex,
  pop,
  reduce,
  reduceRight,
  reduceRightWithIndex,
  reduceWithIndex,
  separate,
  sequence,
  size,
  some,
  toArray,
  toEntries,
  toUnfoldable,
  traverse,
  traverseWithIndex,
  union,
  updateAt,
  upsertAt,
  wilt,
  wither,
} from 'fp-ts/Record'

export {
  invertAll,
  invertLast,
  lookupV,
  reject,
  values,
} from 'fp-ts-std/Record'

// TODO: Suppose we should make a "Struct" module- waiting for more of a reason.
export {
  merge,
  omit,
  omitFrom,
  pick,
  pickFrom,
  renameKey,
  withDefaults,
} from 'fp-ts-std/Struct'

export {
  assoc,
  mergeAll,
  mergeDeepLeft,
  mergeDeepRight,
  mergeLeft,
  mergeRight,
  objOf as of,
  where,
  whereEq,
} from 'ramda'

export { omitBy } from 'ramda-adjunct'

/**
 * @description Deprecated.
 * @deprecated Use R.prop
 * @example
 * pipe(
 *   { foo: { bar: 5 } },
 *   R.prop('foo'),
 *   R.prop('bar')
 * ) // 5
 */
export const path = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Use R.prop + defaultTo
 * @example
 * pipe(
 *   { foo: { bar: undefined } },
 *   R.prop('foo'),
 *   R.prop('bar'),
 *   defaultTo(5)
 * ) // 5
 */
export const pathOr = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Use R.prop + defaultTo
 * @example
 * pipe(
 *   { foo: undefined },
 *   R.prop('foo'),
 *   defaultTo(42)
 * ) // 42
 */
export const propOr = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Use R.whereEq
 * @example
 * pipe(
 *   [{ foo: 'bar' }, { foo: 'baz' }],
 *   A.filter(R.whereEq({ foo: 'bar' }))
 * ) // [{ foo: 'bar' }]
 */
export const propEq = (): undefined => undefined

/**
 * @description Deprecated
 * @deprecated Use `R.of`
 */
export const singleton = (): undefined => undefined
