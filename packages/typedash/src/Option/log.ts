/* eslint-disable no-console */
import { pipe } from '../function/_external'
import * as O from './_external'

/**
 * @description
 *   Logs the value inside the O.
 *
 * @example
 *   pipe(
 *     O.right('userId_5'),
 *     O.log, // console.log('userId_5')
 *     O.map((x) => x), // x is still `userId_5`
 *     ...
 *   )
 */
export const log = <A>(ma: O.Option<A>): O.Option<A> =>
  pipe(
    ma,
    O.map((x) => {
      console.log(JSON.stringify(x, null, 4))
      return x
    }),
  )
