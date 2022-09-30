import '@relmify/jest-fp-ts'
import { ZodError } from 'zod'
import { pipe } from '../function'
import * as O from './_external'
import { fromSafeParseResult } from './fromSafeParseResult'

test('Successful response', () => {
  const params = { success: true as const, data: 'data' }
  const result = fromSafeParseResult(params)
  expect(result).toBeSome
  expect(
    pipe(
      result,
      O.getOrElseW(() => null),
    ),
  ).toEqual(params.data)
})

test('Failure response', () => {
  const params = { success: false as const, error: new ZodError([]) }
  const result = fromSafeParseResult(params)
  expect(result).toBeNone
})
