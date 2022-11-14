import { TE } from '..'
import { memoizeTE } from './memoizeTE'

const cache = new Map()
const mem = memoizeTE(() => cache)
const rngTE = (num: number): TE.TaskEither<Error, number> =>
  TE.of(Math.random() * num)
const rngTEMemo = mem(rngTE)

test('TE', async () => {
  const result = await rngTE(10)()
  const memoResult = await rngTEMemo(10)()

  expect(result).not.toEqual(memoResult)
  expect(memoResult).toEqual(await rngTEMemo(10)())
})
