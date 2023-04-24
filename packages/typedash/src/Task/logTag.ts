import { pipe } from '../function/_external'
import { tapLogTag } from '../function/tapLogTag'
import * as T from './_external'

/**
 * @description
 * Logs the tag, passing the value through
 *
 * @example
 * pipe(
 *   T.of('userId_5'),
 *   T.logTag('made it here'),
 *   T.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const logTag =
  (tag: string) =>
  <A>(ma: T.Task<A>): T.Task<A> =>
    pipe(ma, T.map(tapLogTag(tag)))
