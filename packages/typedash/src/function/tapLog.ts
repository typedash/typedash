/* eslint-disable no-console */

/**
 * @example
 * pipe(
 *   'foo',
 *   tapLog,
 *   // still 'foo'
 * )
 */
export const tapLog = <T>(data: T) => {
  console.log(JSON.stringify(data, null, 4))
  return data
}
