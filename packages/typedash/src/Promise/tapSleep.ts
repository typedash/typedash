import * as DATE from '../Date/_external'
import { sleep } from './sleep'

/**
 * @description
 * Sleep for a number of milliseconds.
 *
 * @example
 * pipe(
 *   Promise.resolve('foo'),
 *   P.tapSleep(DATE.mkMilliseconds(1_000)),
 * ) // Promise<'foo'>
 */
export const tapSleep =
  (n: DATE.Milliseconds) =>
  <T>(data: Promise<T>): Promise<T> =>
    data.then(async (x) => {
      await sleep(n)
      return x
    })
