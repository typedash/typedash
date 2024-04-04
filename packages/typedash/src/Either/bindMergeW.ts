import { pipe } from '../function/_external'
import * as E from './_external'

/**
 * @description
 * Allows you to bind/merge an object (multiple values at the same time).
 * This is like `E_bindMerge` but allows multiple `E.left` types.
 *
 * @example
 * pipe(
 *   E.right({ id1: '1', id2: '2' }),
 *   E.bindMergeW(({ id1, id2 }) => E.allObj({
 *     foo: E.of<string, number>(5),
 *     bar: E.of<Error, number>(6),
 *   })),
 *   E.map(({ id1, id2, foo, bar }) => {
 *     // Do whatever you need with everything
 *   }),
 * )
 */
export const bindMergeW =
  <A extends Record<string, unknown>, E2, B extends Record<string, unknown>>(
    f: (a: A) => E.Either<E2, B>,
  ) =>
  <E1>(ma: E.Either<E1, A>): E.Either<E1 | E2, A & B> =>
    pipe(
      ma,
      E.chainW((a) =>
        pipe(
          f(a),
          E.map((b) => ({ ...a, ...b })),
        ),
      ),
    )
