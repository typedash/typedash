import * as A from '../Array/_external.js'
import { pipe } from '../function/_external.js'
import * as O from '../Option/_external.js'
import { toPairs } from '../Record/toPairs.js'
import * as S from './_external.js'

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
