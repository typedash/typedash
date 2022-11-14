/* eslint-disable no-console */
import { pipe } from '../function/_external.js'
import { tapLog } from '../function/tapLog.js'
import * as TE from './_external.js'

/**
 * @description
 * Logs the value inside the TE.
 *
 * @example
 * pipe(
 *   TE.right('userId_5'),
 *   TE.log, // console.log('userId_5')
 *   TE.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const log = <E, A>(ma: TE.TaskEither<E, A>): TE.TaskEither<E, A> =>
  pipe(ma, TE.map(tapLog))
