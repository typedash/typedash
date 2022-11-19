import '@relmify/jest-fp-ts'
import { mkMilliseconds } from '../Date/_external'
import { pipe } from '../function/_external'
import * as TE from './_external'
import { sleep } from './sleep'

test('smoke', async () => {
  const value = 'foo'

  const result = await pipe(
    TE.of(value),
    TE.chainFirst(sleep(mkMilliseconds(1_000))),
  )()

  expect(result).toEqualRight(value)
})
