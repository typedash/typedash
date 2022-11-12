/* eslint-disable no-console */
// import { stringify as S_stringify } from '../String/stringify'

/**
 * @description Use it like `console.log`, with a tag
 * @example
 * const fn = (data: string) => {
 *   log('tag')(data)
 *   ...
 * }
 */
export const logTag =
  (tag: string) =>
  <T>(data: T) =>
    console.log(tag, JSON.stringify(data, null, 2))
