import { pipe } from '../function/_external'
import * as TE from './_external'

/**
 * @description
 * Allows you to bind/merge an object (multiple values at the same time).
 * This is like `TE_bindMerge` but allows multiple `TE.left` types.
 *
 * @example
 * pipe(
 *   TE.right({ id1: '1', id2: '2' }),
 *   TE.bindMergeW(({ id1, id2 }) => TE.allObj({
 *     foo: TE.of<string, number>(5),
 *     bar: TE.of<Error, number>(6),
 *   })),
 *   E.map(({ id1, id2, foo, bar }) => {
 *     // Do whatever you need with everything
 *   }),
 * )
 */
export const bindMergeW =
  <A extends Record<string, unknown>, E2, B extends Record<string, unknown>>(
    f: (a: A) => TE.TaskEither<E2, B>,
  ) =>
  <E1>(ma: TE.TaskEither<E1, A>): TE.TaskEither<E1 | E2, A & B> =>
    pipe(
      ma,
      TE.chainW((a) =>
        pipe(
          f(a),
          TE.map((b) => ({ ...a, ...b })),
        ),
      ),
    )
