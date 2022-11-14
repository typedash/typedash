/* eslint-disable no-console */
import { pipe } from '../function/_external.js'
import { tapLog } from '../function/tapLog.js'
import * as T from './_external.js'

/**
 * @description
 * Logs the value inside the T
 *
 * @example
 * pipe(
 *   T.of('userId_5'),
 *   T.log, // console.log('userId_5')
 *   T.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const log = <A>(ma: T.Task<A>): T.Task<A> => pipe(ma, T.map(tapLog))
