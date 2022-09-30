/* eslint-disable no-console */
import { pipe } from '../function/_external'
import * as E from './_external'

/**
 * @description
 *   Logs the value inside the E.
 *
 * @example
 *   pipe(
 *     E.right('userId_5'),
 *     E.log, // console.log('userId_5')
 *     E.map((x) => x), // x is still `userId_5`
 *     ...
 *   )
 */
export const log = <E, A>(ma: E.Either<E, A>): E.Either<E, A> =>
  pipe(
    ma,
    E.map((x) => {
      console.log(JSON.stringify(x, null, 4))
      return x
    }),
  )
