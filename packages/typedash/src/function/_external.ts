// https://gcanti.github.io/fp-ts/modules/function.ts.html
export {
  absurd,
  apply,
  constant, // R.always
  constFalse, // R.F
  constNull,
  constTrue, // R.T
  constUndefined,
  constVoid,
  decrement,
  flip,
  flow,
  identity,
  increment,
  pipe,
  tuple,
  tupled,
  untupled,
} from 'fp-ts/function'
export type { Lazy } from 'fp-ts/function'

export { ifElse, when, withIndex, unless } from 'fp-ts-std/Function'

export {
  any,
  defaultTo,
  equals,
  identical,
  juxt,
  max,
  min,
  tap,
  multiply,
  divide,
  range, // NOTE: Maybe should go to the Array module?
  times, // NOTE: Maybe should go to the Array module?
} from 'ramda'

export { defaultWhen, inRange, isArray } from 'ramda-adjunct'

export { default as isArguments } from 'lodash/isArguments'
export { default as isArrayBuffer } from 'lodash/isArrayBuffer'
export { default as isArrayLike } from 'lodash/isArrayLike'
export { default as isArrayLikeObject } from 'lodash/isArrayLikeObject'
export { default as isBoolean } from 'lodash/isBoolean'
export { default as isBuffer } from 'lodash/isBuffer'
export { default as isDate } from 'lodash/isDate'
export { default as isElement } from 'lodash/isElement'
export { default as isEqual } from 'lodash/isEqual'
export { default as isEqualWith } from 'lodash/isEqualWith'
export { default as isError } from 'lodash/isError'
export { default as isFinite } from 'lodash/isFinite'
export { default as isFunction } from 'lodash/isFunction'
export { default as isInteger } from 'lodash/isInteger'
export { default as isLength } from 'lodash/isLength'
export { default as isMap } from 'lodash/isMap'
export { default as isMatch } from 'lodash/isMatch'
export { default as isMatchWith } from 'lodash/isMatchWith'
export { default as isNaN } from 'lodash/isNaN'
export { default as isNative } from 'lodash/isNative'
export { default as isNil } from 'lodash/isNil'
export { default as isNull } from 'lodash/isNull'
export { default as isNumber } from 'lodash/isNumber'
export { default as isObject } from 'lodash/isObject'
export { default as isObjectLike } from 'lodash/isObjectLike'
export { default as isPlainObject } from 'lodash/isPlainObject'
export { default as isRegExp } from 'lodash/isRegExp'
export { default as isSafeInteger } from 'lodash/isSafeInteger'
export { default as isSet } from 'lodash/isSet'
export { default as isSymbol } from 'lodash/isSymbol'
export { default as isTypedArray } from 'lodash/isTypedArray'
export { default as isUndefined } from 'lodash/isUndefined'
export { default as isWeakMap } from 'lodash/isWeakMap'
export { default as isWeakSet } from 'lodash/isWeakSet'

/**
 * @description Deprecated.
 * @deprecated Use S.isString
 */
export const isString = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Look for this method implemented for your data type.
 */
export const isEmpty = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Use PRED.allPass
 */
export const allPass = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Use PRED.and
 */
export const and = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Use PRED.not
 */
export const not = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Use PRED.or
 */
export const or = (): undefined => undefined
