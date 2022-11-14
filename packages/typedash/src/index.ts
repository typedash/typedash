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

export * from './function/index.js'

export * as A from './Array/index.js'
export * as AP from './Apply/index.js'
export * as B from './Boolean/index.js'
export * as DATE from './Date/index.js'
export * as E from './Either/index.js'
export * as J from './Json/index.js'
export * as L from './Spectacles/index.js'
export * as N from './Number/index.js'
export * as NEA from './NonEmptyArray/index.js'
export * as O from './Option/index.js'
export * as ORD from './Ord/index.js'
export * as P from './Promise/index.js'
export * as PRED from './Predicate/index.js'
export * as R from './Record/index.js'
export * as RA from './ReadonlyArray/index.js'
export * as RNEA from './ReadonlyNonEmptyArray/index.js'
export * as Semi from './Semigroup/index.js'
export * as S from './String/index.js'
export * as T from './Task/index.js'
export * as TE from './TaskEither/index.js'
export * as TO from './TaskOption/index.js'
export * as U from './Undefined/index.js'
