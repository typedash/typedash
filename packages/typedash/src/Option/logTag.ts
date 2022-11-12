/* eslint-disable no-console */
import { pipe } from '../function/_external'
import { tapLogTag } from '../function/tapLogTag'
import * as O from './_external'

/**
 * @description
 * Logs the value inside the O.
 *
 * @example
 * pipe(
 *   O.of('userId_5'),
 *   O.logTag('tag'), // console.log('tag', 'userId_5')
 *   O.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const logTag =
  (tag: string) =>
  <A>(ma: O.Option<A>): O.Option<A> =>
    pipe(ma, O.map(tapLogTag(tag)))
