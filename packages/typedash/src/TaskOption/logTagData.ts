/* eslint-disable no-console */
import { pipe } from '../function/_external'
import { tapLogTagData } from '../function/tapLogTagData'
import * as TO from './_external'

/**
 * @description
 * Logs the value inside the TO.
 *
 * @example
 * pipe(
 *   TO.of('userId_5'),
 *   TO.logTagData('tag'), // console.log('tag', 'userId_5')
 *   TO.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const logTagData =
  (tag: string) =>
  <A>(ma: TO.TaskOption<A>): TO.TaskOption<A> =>
    pipe(ma, TO.map(tapLogTagData(tag)))
