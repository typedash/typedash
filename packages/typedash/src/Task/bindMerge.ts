import { pipe } from '../function/_external'
import * as T from './_external'

/**
 * @description
 * Allows you to bind/merge an object (multiple values at the same time)
 *
 * @example
 * pipe(
 *   T.of({ id1: '1', id2: '2' }),
 *   T.bindMerge(({ id1, id2 }) =>
 *     T.allObj({
 *       user1: T.of(id1),
 *       user2: T.of(id2),
 *     })
 *   ),
 *   T.map(({ id1, id2, user1, user2 }) => {
 *     console.log({ id1, id2, user1, user2 })
 *   }),
 * )
 */
export const bindMerge =
  <A extends Record<string, unknown>, B extends Record<string, unknown>>(
    f: (a: A) => T.Task<B>,
  ) =>
  (ma: T.Task<A>): T.Task<A & B> =>
    pipe(
      ma,
      T.chain((a) =>
        pipe(
          f(a),
          T.map((b) => ({ ...a, ...b })),
        ),
      ),
    )
