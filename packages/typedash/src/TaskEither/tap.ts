import { constant, pipe } from '../function/_external'
import * as TE from './_external'

/**
 * @description
 * Like `Ramda.tap`, but this will handle the resulting TaskEither
 * that your function creates and return the original value.
 *
 * @example
 * type deleteUser = (id: string) => TaskEither<Error, boolean>
 *
 * pipe(
 *   TE.right('userId_5'),
 *   TE.chain(TE.tap((x) => deleteUser(x)),
 *   TE.map((x) => x), // x is `userId_5` still and not a boolean
 *   ...
 * )
 */
export const tap =
  <E, A>(f: (a: A) => TE.TaskEither<E, unknown>) =>
  (a: A): TE.TaskEither<E, A> =>
    pipe(a, f, TE.map(constant(a)))
