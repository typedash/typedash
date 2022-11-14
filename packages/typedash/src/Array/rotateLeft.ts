import { P, match } from 'ts-pattern'
import { pipe } from '../function/_external.js'
import * as O from '../Option/_external.js'
import * as A from './_external.js'

/**
 * @description
 * Like `A.rotate`, but moves elements "left", or to the back of the array.
 *
 * @see A.rotate
 *
 * @example
 * import { A } from '@typedash/typedash'
 * assert.deepStrictEqual(A.rotateLeft(2)([1, 2, 3, 4, 5]), [3, 4, 5, 1, 2])
 */
export const rotateLeft =
  (n: number) =>
  <T>(data: Array<T>): Array<T> =>
    match(n)
      .with(0, () => data)
      .with(P.number, () =>
        pipe(
          data,
          O.fromPredicate(A.isNonEmpty),
          O.map(([first, ...rest]) => [...rest, first]),
          O.getOrElseW<Array<T>>(() => []),
          rotateLeft(n - 1),
        ),
      )
      .exhaustive()
