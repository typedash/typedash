/* eslint-disable no-console */
import { pipe } from '../function/_external'
import { tapLogData } from '../function/tapLogData'
import * as T from './_external'

/**
 * @description
 * Logs the value inside the T
 *
 * @example
 * pipe(
 *   T.of('userId_5'),
 *   T.logData, // console.log('userId_5')
 *   T.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const logData = <A>(ma: T.Task<A>): T.Task<A> =>
  pipe(ma, T.map(tapLogData))
