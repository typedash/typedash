/* eslint-disable no-console */
// import { stringify as S_stringify } from '../String/stringify'

/**
 * @description Use it like `console.log`, with a tag
 * @example
 * const fn = (data: string) => {
 *   log('tag')(data)
 *   ...
 * }
 * @todo
 * Use `stringify`. It errors with:
 * "Cannot find module t". Likely a circular dep.
 */
export const logTag =
  (tag: string) =>
  <T>(data: T) =>
    console.log(tag, data)
