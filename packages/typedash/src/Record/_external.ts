// https://gcanti.github.io/fp-ts/modules/Record.ts.html
export {
  compact,
  separate,
  mapWithIndex,
  filter,
  filterMap,
  filterMapWithIndex,
  filterWithIndex,
  partition,
  partitionMap,
  partitionMapWithIndex,
  partitionWithIndex,
  collect,
  deleteAt,
  has,
  isEmpty,
  keys,
  lookup,
  map,
  modifyAt,
  pop,
  reduceWithIndex,
  size,
  some,
  toArray,
  updateAt,
  foldMap,
  reduce,
  reduceRight,
  wilt,
  wither,
  difference,
  flap,
  intersection,
  union,
  upsertAt,
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
} from 'fp-ts/Record'

export {
  pick,
  omit,
  invertAll,
  merge,
  reject,
  values,
  invertLast,
  lookupV,
  pickFrom,
} from 'fp-ts-std/Record'

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
export const singleton = () => undefined
