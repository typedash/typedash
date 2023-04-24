import { constant, pipe } from '../function/_external'
import * as TO from './_external'

/**
 * @description
 * Like `Ramda.tap`, but this will handle the resulting TaskOption
 * that your function creates and return the original value.
 *
 * @example
 * type deleteUser = (id: string) => TaskOption<boolean>
 *
 * pipe(
 *   TO.of('userId_5'),
 *   TO.chain(TO.tap((x) => deleteUser(x)),
 *   TO.map((x) => x), // x is `userId_5` still and not a boolean
 *   ...
 * )
 */
export const tap =
  <A>(f: (a: A) => TO.TaskOption<unknown>) =>
  (a: A): TO.TaskOption<A> =>
    pipe(a, f, TO.map(constant(a)))
