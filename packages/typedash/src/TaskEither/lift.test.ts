import '@relmify/jest-fp-ts'
import { pipe } from '../function'
import { getOrThrowError } from './getOrThrowError'
import { lift } from './lift'

test('function with args', async () => {
  const prom = (arg1: string, arg2: string) =>
    Promise.resolve(`${arg1} ${arg2}`)
  const teLiftedFunc = lift()(prom)
  const result = await pipe(teLiftedFunc('hello', 'world'), getOrThrowError)()

  expect(result).toEqual('hello world')
})

test('function without args', async () => {
  const prom = () => Promise.resolve('worked with no args!')
  const teLiftedFunc = lift()(prom)
  const result = await pipe(teLiftedFunc(), getOrThrowError)()

  expect(result).toEqual('worked with no args!')
})

test('onRejected provided', async () => {
  const prom = () => Promise.reject(new Error('custom error message'))
  const teLiftedFunc = lift((error) => error as Error)(prom)
  const result = await pipe(teLiftedFunc())()

  expect(result).toEqualLeft(new Error('custom error message'))
})
