import { pipe } from '../function/index.js'
import * as NEA from '../NonEmptyArray/_external.js'
import * as S from '../String/_external.js'

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
