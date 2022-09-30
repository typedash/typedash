/**
 * @description
 * This module is meant to re-export and implement all utility functions.
 * Reason for doing it this way is so `map` is always the same implementation
 * instead of sometimes coming from `lodash` and sometimes coming from `ramda`
 * Also allows us to override functions to "fix" or "change" them and not
 * have to update imports throughout the code base.
 *
 * @note
 * Do not import from outside this module when implementing functions
 */

export * from './function'

export * as A from './Array'
export * as AP from './Apply'
export * as B from './Boolean'
export * as DATE from './Date'
export * as E from './Either'
export * as J from './Json'
export * as L from './Spectacles'
export * as N from './Number'
export * as NEA from './NonEmptyArray'
export * as O from './Option'
export * as ORD from './Ord'
export * as P from './Promise'
export * as PRED from './Predicate'
export * as R from './Record'
export * as RA from './ReadonlyArray'
export * as Semi from './Semigroup'
export * as S from './String'
export * as T from './Task'
export * as TE from './TaskEither'
