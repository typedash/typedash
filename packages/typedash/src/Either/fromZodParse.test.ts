import { ZodError, z } from 'zod'
import { identity } from '../function/_external'
import { throwError } from '../function/throwError'
import * as E from './_external'
import { fromZodParse } from './fromZodParse'

test('Successful response', () => {
  const data = 'foo'
  const result = fromZodParse(z.string())(data)
  expect(result._tag).toEqual('Right')
  expect(E.match(throwError, identity)(result)).toEqual(data)
})

test('Failure response', () => {
  const result = fromZodParse(z.string())(5)
  expect(result._tag).toEqual('Left')
  expect(E.match(identity, throwError)(result)).toBeInstanceOf(ZodError)
})
