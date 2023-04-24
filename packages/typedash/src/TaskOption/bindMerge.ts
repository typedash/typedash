import { pipe } from '../function/_external'
import * as TO from './_external'

/**
 * @description
 * Allows you to bind/merge an object (multiple values at the same time)
 *
 * @example
 * pipe(
 *   TO.some({ id1: '1', id2: '2' }),
 *   TO.bindMerge(({ id1, id2 }) =>
 *     TO.allObj({
 *       user1: TO.some(id1),
 *       user2: TO.some(id2),
 *     })
 *   ),
 *   TO.map(({ id1, id2, user1, user2 }) => {
 *     console.log({ id1, id2, user1, user2 })
 *   }),
 * )
 */
export const bindMerge =
  <A extends Record<string, unknown>, B extends Record<string, unknown>>(
    f: (a: A) => TO.TaskOption<B>,
  ) =>
  (ma: TO.TaskOption<A>): TO.TaskOption<A & B> =>
    pipe(
      ma,
      TO.chain((a) =>
        pipe(
          f(a),
          TO.map((b) => ({ ...a, ...b })),
        ),
      ),
    )
