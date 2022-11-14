import { constant, pipe } from '../function/_external.js'
import * as T from './_external.js'

/**
 * @description
 * Like `Ramda.tap`, but this will handle the resulting Task
 * that your function creates and return the original value.
 *
 * @example
 * type deleteUser = (id: string) => Task<Error, boolean>
 *
 * pipe(
 *   T.right('userId_5'),
 *   T.chain(T.tap((x) => deleteUser(x)),
 *   T.map((x) => x), // x is `userId_5` still and not a boolean
 *   ...
 * )
 */
export const tap =
  <A>(f: (a: A) => T.Task<unknown>) =>
  (a: A): T.Task<A> =>
    pipe(a, f, T.map(constant(a)))
