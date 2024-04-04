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
  divide,
  equals,
  identical,
  isNil,
  juxt,
  max,
  min,
  multiply,
  range, // NOTE: Maybe should go to the Array module?
  tap,
  times, // NOTE: Maybe should go to the Array module?
} from 'ramda'

export {
  defaultWhen,
  inRange,
  isArray,
  isArrayLike,
  isAsyncFunction,
  isBigInt,
  isBoolean,
  isDate,
  isError,
  isFinite,
  isFloat,
  isFunction,
  isGeneratorFunction,
  isInteger,
  isInvalidDate,
  isIterable,
  isMap,
  isNaN,
  isNilOrEmpty,
  isNotArray,
  isNotArrayLike,
  isNotAsyncFunction,
  isNotBoolean,
  isNotDate,
  isNotFinite,
  isNotFloat,
  isNotFunction,
  isNotGeneratorFunction,
  isNotInteger,
  isNotMap,
  isNotNaN,
  isNotNil,
  isNotNilOrEmpty,
  isNotNull,
  isNotNumber,
  isNotObject,
  isNotObjectLike,
  isNotPlainObject,
  isNotPrimitive,
  isNotRegExp,
  isNotSet,
  isNotString,
  isNotUndefined,
  isNotValidDate,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isPrimitive,
  isRegExp,
  isSafeInteger,
  isSet,
  isSymbol,
  isUndefined,
  isValidDate,
} from 'ramda-adjunct'

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

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isArguments = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isArrayBuffer = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isArrayLikeObject = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isBuffer = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isElement = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Use `equals`.
 */
export const isEqual = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isEqualWith = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isLength = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isMatch = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isMatchWith = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isNative = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isTypedArray = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isWeakMap = (): undefined => undefined

/**
 * @description Deprecated.
 * @deprecated Removed with lodash removal, no replacement.
 */
export const isWeakSet = (): undefined => undefined
