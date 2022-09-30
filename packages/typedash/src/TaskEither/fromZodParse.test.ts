import '@relmify/jest-fp-ts'
import { z } from 'zod'
import { fail } from '../_tests'
import * as E from '../Either/_external'
import { identity } from '../function/_external'
import { fromZodParse } from './fromZodParse'

test('Successful response', async () => {
  const data = 'foo'
  const result = await fromZodParse(z.string())(data)()
  expect(result).toBeRight
  expect(E.match(fail, identity)(result)).toEqual(data)
})

test('Failure response', async () => {
  const result = await fromZodParse(z.string())(5)()
  expect(result).toBeLeft
  // expect(E.match(identity, fail)(result)).toBeInstanceOf(SpurError)
})
