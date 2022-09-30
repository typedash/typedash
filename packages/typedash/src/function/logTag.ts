/* eslint-disable no-console */

/**
 * @example
 * const foo = (data: unknown) => {
 *   logTag('hi mom', data)
 * }
 */
export const logTag =
  (tag: string) =>
  <T>(data: T) =>
    console.log(tag, JSON.stringify(data, null, 4))
