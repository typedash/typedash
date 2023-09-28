import { flow, pipe } from '../function/_external'
import * as TE from './_external'

/**
 * @description
 * Bind a non-TaskEither value (this does it for you).
 *
 * @example
 * pipe(
 *   TE.Do,
 *   TE.bind('foo', () => TE.right(5)),
 *   TE.bindValue('bar', ({ foo }) => foo + 1),
 *   TE.map(({ foo, bar }) => {
 *     console.log({ foo, bar })
 *   }),
 * )
 */
export const bindValue =
  <N extends string, A, E, B>(name: Exclude<N, keyof A>, f: (a: A) => B) =>
  (
    ma: TE.TaskEither<E, A>,
  ): TE.TaskEither<
    E,
    { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }
  > =>
    pipe(
      ma,
      // Using `bindW` because technically we're widening the left (`E`)
      // with `never`, but that will be removed/rejected when unioned.
      TE.bindW(name, flow(f, TE.right)),
    )
