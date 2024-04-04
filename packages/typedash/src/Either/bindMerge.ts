import { pipe } from '../function/_external'
import * as E from './_external'

/**
 * @description
 * Allows you to bind/merge an object (multiple values at the same time)
 *
 * @example
 * pipe(
 *   E.right({ id1: '1', id2: '2' }),
 *   E.bindMerge(({ id1, id2 }) =>
 *     E.allObj({
 *       user1: E.right(id1),
 *       user2: E.right(id2),
 *     })
 *   ),
 *   E.map(({ id1, id2, user1, user2 }) => {
 *     console.log({ id1, id2, user1, user2 })
 *   }),
 * )
 */
export const bindMerge =
  <A extends Record<string, unknown>, E, B extends Record<string, unknown>>(
    f: (a: A) => E.Either<E, B>,
  ) =>
  (ma: E.Either<E, A>): E.Either<E, A & B> =>
    pipe(
      ma,
      E.chain((a) =>
        pipe(
          f(a),
          E.map((b) => ({ ...a, ...b })),
        ),
      ),
    )
