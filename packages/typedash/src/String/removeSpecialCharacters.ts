import * as A from '../Array/_external'
import { flow, pipe } from '../function/_external'
import * as NEA from '../NonEmptyArray/_external'
import * as O from '../Option/_external'
import { toConst as O_toConst } from '../Option/toConst'
import * as S from '../String/_external'

/**
 * @description
 * Serializes string to have only [a-z0-9]
 */
export const removeSpecialCharacters = (data: string): string =>
  pipe(
    data,
    S.matchAll(/([a-zA-Z0-9-_])/g),
    O.map(NEA.map(flow(A.head, O.unsafeUnwrap))),
    O.map((x) => Array.from(x)),
    O.map(A.join('')),
    O_toConst(''),
    S.toLowerCase,
  )
