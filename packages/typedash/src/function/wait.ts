/**
 * @description
 * Sleep for a number of seconds
 *
 * @example
 * const someFn = async () => {
 *   await wait(5)
 *   return 'foo'
 * }
 */
export const wait = (seconds: number) =>
  new Promise((resolve, _reject) => {
    setTimeout(resolve, 1000 * seconds)
  })
