import { tapLogTag } from '../function'
import { pipe } from '../function/_external'
import * as E from './_external'

/**
 * @description
 * Logs the tag, but not the value.
 *
 * @example
 * pipe(
 *   E.right('userId_5'),
 *   E.logTag('made it here'),
 *   E.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const logTag =
  (tag: string) =>
  <E, A>(ma: E.Either<E, A>): E.Either<E, A> =>
    pipe(ma, E.map(tapLogTag(tag)))
