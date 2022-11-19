import '@relmify/jest-fp-ts'
import * as DATE from '../Date/_external'
import { pipe } from '../function/_external'
import * as TE from './_external'
import { tapSleep } from './tapSleep'

test('smoke', async () => {
  const value = 'foo'

  const result = await pipe(
    TE.of(value),
    tapSleep(DATE.mkMilliseconds(1_000)),
  )()

  expect(result).toEqualRight(value)
})
