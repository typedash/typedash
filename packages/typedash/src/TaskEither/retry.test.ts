import { Monoid, constantDelay, limitRetries } from 'retry-ts'
import { pipe } from '../function'
import * as TE from './_external'
import { getOrThrowError } from './getOrThrowError'
import { left } from './left'
import { retry } from './retry'

test('retries according to the policy', async () => {
  const numRetries = 3

  let retries = 1
  // function that initially fails but will succeed after retries
  const func = jest.fn((message: string) => {
    if (retries >= numRetries) {
      return TE.right(message)
    }

    retries = retries + 1
    return left(new Error('fail'))
  })

  const retryPolicy = Monoid.concat(
    constantDelay(250),
    limitRetries(numRetries),
  )
  const funcWithRetries = retry(retryPolicy)(func)

  const result = await pipe(funcWithRetries('it worked!'), getOrThrowError)()

  expect(result).toEqual('it worked!')
  expect(func).toHaveBeenCalledTimes(numRetries)
})
