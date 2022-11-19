import * as DATE from '../Date/_external'

/**
 * @description
 * Sleep for a number of milliseconds.
 *
 * @example
 * const someFn = async () => {
 *   await P.sleep(DATE.mkMilliseconds(5_000))
 *   return 'foo'
 * }
 */
export const sleep = (n: DATE.Milliseconds) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, Math.floor(DATE.unMilliseconds(n)))
  })
