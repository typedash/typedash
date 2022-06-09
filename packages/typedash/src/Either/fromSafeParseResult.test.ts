import { ZodError } from 'zod'
import { identity } from '../function/_external'
import { throwError } from '../function/throwError'
import * as E from './_external'
import { fromSafeParseResult } from './fromSafeParseResult'

test('Successful response', () => {
  const params = { success: true as const, data: 'data' }
  const result = fromSafeParseResult(params)
  expect(result._tag).toEqual('Right')
  expect(E.match(throwError, identity)(result)).toEqual(params.data)
})

test('Failure response', () => {
  const params = { success: false as const, error: new ZodError([]) }
  const result = fromSafeParseResult(params)
  expect(result._tag).toEqual('Left')
  expect(E.match(identity, throwError)(result)).toEqual(params.error)
})
