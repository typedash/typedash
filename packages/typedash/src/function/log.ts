/* eslint-disable no-console */
// import { stringify as S_stringify } from '../String/stringify'

/**
 * @description Use it like `console.log`
 * @example
 * const fn = (data: string) => {
 *   log(data)
 *   ...
 * }
 * @todo
 * Use `stringify`. It errors with:
 * "Cannot find module t". Likely a circular dep.
 */
export const log = <T>(data: T) => console.log(data)
