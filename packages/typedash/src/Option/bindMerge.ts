import { pipe } from '../function/_external'
import * as O from './_external'

/**
 * @description
 * Allows you to bind/merge an object (multiple values at the same time)
 *
 * @example
 * pipe(
 *   O.some({ id1: '1', id2: '2' }),
 *   O.bindMerge(({ id1, id2 }) =>
 *     O.allObj({
 *       user1: O.some(id1),
 *       user2: O.some(id2),
 *     })
 *   ),
 *   O.map(({ id1, id2, user1, user2 }) => {
 *     console.log({ id1, id2, user1, user2 })
 *   }),
 * )
 */
export const bindMerge =
  <A extends Record<string, unknown>, B extends Record<string, unknown>>(
    f: (a: A) => O.Option<B>,
  ) =>
  (ma: O.Option<A>): O.Option<A & B> =>
    pipe(
      ma,
      O.chain((a) =>
        pipe(
          f(a),
          O.map((b) => ({ ...a, ...b })),
        ),
      ),
    )
