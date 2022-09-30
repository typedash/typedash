import '@relmify/jest-fp-ts'
import { ZodError } from 'zod'
import { fail } from '../_tests'
import * as E from '../Either/_external'
import { identity, pipe } from '../function/_external'
import { fromSafeParseResult } from './fromSafeParseResult'

test('Successful response', async () => {
  const params = { success: true as const, data: 'data' }
  const result = await pipe(params, fromSafeParseResult)()
  expect(result).toBeRight
  expect(pipe(result, E.match(fail, identity))).toEqual(params.data)
})

test('Failure response', async () => {
  const params = { success: false as const, error: new ZodError([]) }
  const result = await pipe(params, fromSafeParseResult)()
  expect(result).toBeLeft
  // @ts-ignore
  expect(pipe(result, E.match(identity, fail))).toEqual(params.error)
})
