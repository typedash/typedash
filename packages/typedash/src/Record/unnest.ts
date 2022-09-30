/* eslint-disable @typescript-eslint/ban-ts-comment */
import { pipe } from '../function/_external'
import * as S from '../String/_external'
import * as R from './_external'

/**
 * @description
 * Unnest a Record of Records.
 *
 * @todo
 * Huge punt on the types but the result is what you expect from the caller.
 * @todo
 * The thunk-style function call is to allow for tacit programming, better way?
 */
export const unnest =
  <C, B = Record<string, C>, A = Record<string, B>>() =>
  (a: A): B =>
    pipe(
      // @ts-ignore
      a,
      R.reduce(S.Ord)<C, B>({} as B, (acc, valueRecords) => {
        pipe(
          // @ts-ignore
          valueRecords,
          R.mapWithIndex((valueRecordKey, valueRecord) => {
            // @ts-ignore
            acc[valueRecordKey] = valueRecord
          }),
        )
        return acc
      }),
    )
