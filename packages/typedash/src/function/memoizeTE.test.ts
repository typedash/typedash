import { TE } from '..'
import { memoizeTE } from './memoizeTE'

const cache = new Map()
const cacheF = () => ({
  get: (key: string) => Promise.resolve(cache.get(key)),
  has: (key: string) => Promise.resolve(cache.has(key)),
  set: (key: string, value: unknown) => Promise.resolve(cache.set(key, value)),
  delete: (key: string) => Promise.resolve(cache.delete(key)),
})
const mem = memoizeTE(cacheF)
const rngTE = (num: number): TE.TaskEither<Error, number> =>
  TE.of(Math.random() * num)
const rngTEMemo = mem(rngTE)

test('TE', async () => {
  const result = await rngTE(10)()
  const memoResult = await rngTEMemo(10)()

  expect(result).not.toEqual(memoResult)
  expect(memoResult).toEqual(await rngTEMemo(10)())
})
