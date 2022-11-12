/* eslint-disable no-console */
// import { stringify as S_stringify } from '../String/stringify'

/**
 * @description Use it like `console.log`
 * @example
 * const fn = (data: string) => {
 *   log(data)
 *   ...
 * }
 */
export const log = <T>(data: T) => console.log(JSON.stringify(data, null, 2))
