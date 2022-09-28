import * as A from '../Array/_external'
import { pipe } from '../function/_external'
import * as O from '../Option/_external'
import { toPairs } from '../Record/toPairs'
import * as S from './_external'

export const getPropBySpec =
  <T extends Record<string, Array<string>>>(spec: T) =>
  (data: string): O.Option<keyof T> => {
    return pipe(
      spec,
      toPairs,
      A.findFirst(([_key, strings]) =>
        pipe(
          strings,
          A.exists((str) => S.includes(str)(data)),
        ),
      ),
      O.map(([key]) => key),
    )
  }
