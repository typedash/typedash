import { pipe } from '../function'
import * as NEA from '../NonEmptyArray/_external'
import * as S from '../String/_external'

/**
 * @description Split a string on a given `separator`
 *
 * @note Use `A.fromNonEmptyArray` if desired
 *
 * @example
 * pipe(
 *   'a-b-c',
 *   S.split('-'),
 *   NEA.map(S.toUpperCase),
 * ) // NEA.NonEmptyArray<['A', 'B', 'C']>
 */
export const split =
  (separator: string | RegExp) =>
  (s: string): NEA.NonEmptyArray<string> =>
    pipe(s, S.splitRNEA(separator), NEA.fromReadonlyNonEmptyArray)
