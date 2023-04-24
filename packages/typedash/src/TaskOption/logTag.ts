import { pipe } from '../function/_external'
import { tapLogTag } from '../function/tapLogTag'
import * as TO from './_external'

/**
 * @description
 * Logs the tag, passes value through.
 *
 * @example
 * pipe(
 *   TO.of('userId_5'),
 *   TO.logTag('made it here'),
 *   TO.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const logTag =
  (tag: string) =>
  <A>(ma: TO.TaskOption<A>): TO.TaskOption<A> =>
    pipe(ma, TO.map(tapLogTag(tag)))
