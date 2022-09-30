/* eslint-disable no-console */

/**
 * @example
 * const foo = () => {
 *   log('hi mom')
 * }
 */
export const log = <T>(data: T) => console.log(JSON.stringify(data, null, 4))
