import { pipe } from '../function/_external'
import * as TE from './_external'

/**
 * @description
 * Allows you to bind/merge an object (multiple values at the same time)
 *
 * @example
 * pipe(
 *   TE.right({ id1: '1', id2: '2' }),
 *   TE.bindMerge(({ id1, id2 }) =>
 *     TE.allObj({
 *       user1: TE.right(id1),
 *       user2: TE.right(id2),
 *     })
 *   ),
 *   TE.map(({ id1, id2, user1, user2 }) => {
 *     console.log({ id1, id2, user1, user2 })
 *   }),
 * )
 */
export const bindMerge =
  <A extends Record<string, unknown>, E, B extends Record<string, unknown>>(
    f: (a: A) => TE.TaskEither<E, B>,
  ) =>
  (ma: TE.TaskEither<E, A>): TE.TaskEither<E, A & B> =>
    pipe(
      ma,
      TE.chain((a) =>
        pipe(
          f(a),
          TE.map((b) => ({ ...a, ...b })),
        ),
      ),
    )
