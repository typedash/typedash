/* eslint-disable no-console */
import { pipe } from '../function/_external'
import { tapLogData } from '../function/tapLogData'
import * as E from './_external'

/**
 * @description
 * Logs the value inside the E.
 *
 * @example
 * pipe(
 *   E.right('userId_5'),
 *   E.logData, // console.log('userId_5')
 *   E.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const logData = <E, A>(ma: E.Either<E, A>): E.Either<E, A> =>
  pipe(ma, E.map(tapLogData))
