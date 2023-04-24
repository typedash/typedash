import { flow, pipe } from '../function/_external'
import * as TO from './_external'

/**
 * @description
 * Bind a non-TaskOption value (this does it for you).
 *
 * @example
 * pipe(
 *   TO.Do,
 *   TO.bind('foo', () => TO.some(5)),
 *   TO.bindValue('bar', ({ foo }) => foo + 1),
 *   TO.map(({ foo, bar }) => {
 *     console.log({ foo, bar })
 *   }),
 * )
 */
export const bindValue =
  <N extends string, A, B>(name: Exclude<N, keyof A>, f: (a: A) => B) =>
  (
    ma: TO.TaskOption<A>,
  ): TO.TaskOption<{
    readonly [K in N | keyof A]: K extends keyof A ? A[K] : B
  }> =>
    pipe(ma, TO.bind(name, flow(f, TO.some)))
