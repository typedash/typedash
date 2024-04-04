import '@relmify/jest-fp-ts'
import { z } from 'zod'
import { fail } from '../_tests'
import * as E from '../Either/_external'
import { identity, pipe } from '../function/_external'
import { fromZodParse } from './fromZodParse'

test('Successful response', async () => {
  const data = 'foo'
  const result = await fromZodParse(z.string())(data)()
  expect(result).toBeRight
  expect(pipe(result, E.match(fail, identity))).toEqual(data)
})

test('Failure response', async () => {
  const result = await fromZodParse(z.string())(5)()
  expect(result).toBeLeft
  // expect(pipe(result, E.match(identity, fail))).toBeInstanceOf(SpurError)
})
