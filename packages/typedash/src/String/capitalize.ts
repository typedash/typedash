import { pipe } from '../function/_external'
import { splitAt, toUpperCase } from './_external'

/**
 * @description Capitalize the first letter of a string.
 *
 * @example
 * capitalize('hello') // 'Hello'
 */
export const capitalize = (data: string): string =>
  pipe(
    data,
    splitAt(1),
    ([firstLetter, rest]) => `${toUpperCase(firstLetter)}${rest}`,
  )
