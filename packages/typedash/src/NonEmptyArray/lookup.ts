import * as O from '../Option/_external.js'
import * as NEA from './_external.js'
import { isOutOfBound } from './isOutOfBound.js'

/**
 * @description
 * This function provides a safe way to read a value
 * at a particular index from a `NonEmptyArray`.
 * Also supports negative indexes.
 *
 * @example
 * import { pipe, NEA, O } from '@typedash/typedash'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], NEA.lookup(1)), O.some(2))
 * assert.deepStrictEqual(pipe([1, 2, 3], NEA.lookup(3)), O.none)
 * assert.deepStrictEqual(pipe([1, 2, 3], NEA.lookup(-1)), O.some(3))
 * assert.deepStrictEqual(pipe([1, 2, 3], NEA.lookup(-3)), O.some(1))
 * assert.deepStrictEqual(pipe([1, 2, 3], NEA.lookup(-4)), O.none)
 *
 * @see https://github.com/gcanti/fp-ts/blob/3.0.0/src/ReadonlyArray.ts#L346
 */
export const lookup =
  (i: number) =>
  <A>(as: NEA.NonEmptyArray<A>): O.Option<A> => {
    const i_ = i < 0 ? as.length + i : i
    return isOutOfBound(i_, as) ? O.none : O.some(as[i_])
  }
