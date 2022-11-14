/* eslint-disable no-console */
import { pipe } from '../function/_external.js'
import { tapLog } from '../function/tapLog.js'
import * as E from './_external.js'

/**
 * @description
 * Logs the value inside the E.
 *
 * @example
 * pipe(
 *   E.right('userId_5'),
 *   E.log, // console.log('userId_5')
 *   E.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const log = <E, A>(ma: E.Either<E, A>): E.Either<E, A> =>
  pipe(ma, E.map(tapLog))
