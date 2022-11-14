/* eslint-disable no-console */
import { pipe } from '../function/_external.js'
import { tapLog } from '../function/tapLog.js'
import * as TO from './_external.js'

/**
 * @description
 * Logs the value inside the TO.
 *
 * @example
 * pipe(
 *   TO.of('userId_5'),
 *   TO.log, // console.log('userId_5')
 *   TO.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const log = <A>(ma: TO.TaskOption<A>): TO.TaskOption<A> =>
  pipe(ma, TO.map(tapLog))
