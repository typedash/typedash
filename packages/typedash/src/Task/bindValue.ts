import { flow, pipe } from '../function/_external'
import * as T from './_external'

/**
 * @description
 * Bind a non-Task value (this does it for you).
 *
 * @example
 * pipe(
 *   T.Do,
 *   T.bind('foo', () => T.of(5)),
 *   T.bindValue('bar', ({ foo }) => foo + 1),
 *   T.map(({ foo, bar }) => {
 *     console.log({ foo, bar })
 *   }),
 * )
 */
export const bindValue =
  <N extends string, A, B>(name: Exclude<N, keyof A>, f: (a: A) => B) =>
  (
    ma: T.Task<A>,
  ): T.Task<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }> =>
    pipe(ma, T.bind(name, flow(f, T.of)))
