import { flow, pipe } from '../function/_external'
import * as O from './_external'

/**
 * @description
 * Bind a non-Option value (this does it for you).
 *
 * @example
 * pipe(
 *   O.Do,
 *   O.bind('foo', () => O.some(5)),
 *   O.bindValue('bar', ({ foo }) => foo + 1),
 *   O.map(({ foo, bar }) => {
 *     console.log({ foo, bar })
 *   }),
 * )
 */
export const bindValue =
  <N extends string, A, B>(name: Exclude<N, keyof A>, f: (a: A) => B) =>
  (
    ma: O.Option<A>,
  ): O.Option<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }> =>
    pipe(ma, O.bind(name, flow(f, O.some)))
