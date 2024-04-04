import { Predicate, not } from 'fp-ts/Predicate'
import { Refinement } from 'fp-ts/Refinement'
import * as A from './_external'

/**
 * @description
 * Filters out items in the array for which the predicate holds. This can be
 * thought of as the inverse of ordinary array filtering.
 *
 * @example
 * import { reject } from 'fp-ts-std/Array'
 * import { Predicate } from 'fp-ts/Predicate'
 *
 * const isEven: Predicate<number> = n => n % 2 === 0
 *
 * assert.deepStrictEqual(reject(isEven)([1, 2, 3, 4]), [1, 3])
 */
export const reject: {
  <A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Array<B>
  <A>(predicate: Predicate<A>): <B extends A>(bs: Array<B>) => Array<B>
  <A>(predicate: Predicate<A>): (as: Array<A>) => Array<A>
} = <A>(predicate: Predicate<A>) => A.filter(not(predicate))
