/* eslint-disable no-console */
import { pipe } from '../function/_external'
import { tapLogTag } from '../function/tapLogTag'
import * as T from './_external'

/**
 * @description
 * Logs the value inside the T
 *
 * @example
 * pipe(
 *   T.of('userId_5'),
 *   T.logTag('tag'), // console.log('tag', 'userId_5')
 *   T.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const logTag =
  (tag: string) =>
  <A>(ma: T.Task<A>): T.Task<A> =>
    pipe(ma, T.map(tapLogTag(tag)))
