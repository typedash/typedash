/* eslint-disable no-console */
import { pipe } from '../function/_external'
import { tapLogData } from '../function/tapLogData'
import * as O from './_external'

/**
 * @description
 * Logs the value inside the O.
 *
 * @example
 * pipe(
 *   O.right('userId_5'),
 *   O.logData, // console.log('userId_5')
 *   O.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const logData = <A>(ma: O.Option<A>): O.Option<A> =>
  pipe(ma, O.map(tapLogData))
