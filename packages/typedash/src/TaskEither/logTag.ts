import { tapLogTag } from '../function'
import { pipe } from '../function/_external'
import * as TE from './_external'

/**
 * @description
 * Logs the value inside the TE.
 *
 * @example
 * pipe(
 *   TE.right('userId_5'),
 *   TE.logTag('made it here'),
 *   TE.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const logTag =
  (tag: string) =>
  <E, A>(ma: TE.TaskEither<E, A>): TE.TaskEither<E, A> =>
    pipe(ma, TE.map(tapLogTag(tag)))
