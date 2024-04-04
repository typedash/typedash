import { flow, pipe } from '../function/_external'
import * as E from './_external'

/**
 * @description
 * Bind a non-Either value (this does it for you).
 *
 * @example
 * pipe(
 *   E.Do,
 *   E.bind('foo', () => E.right(5)),
 *   E.bindValue('bar', ({ foo }) => foo + 1),
 *   E.map(({ foo, bar }) => {
 *     console.log({ foo, bar })
 *   }),
 * )
 */
export const bindValue =
  <N extends string, A, E, B>(name: Exclude<N, keyof A>, f: (a: A) => B) =>
  (
    ma: E.Either<E, A>,
  ): E.Either<
    E,
    { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }
  > =>
    pipe(
      ma,
      // Using `bindW` because technically we're widening the left (`E`)
      // with `never`, but that will be removed/rejected when unioned.
      E.bindW(name, flow(f, E.right)),
    )
