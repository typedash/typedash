import { memoizeP } from './memoizeP'

const cache = new Map()
const cacheF = () => ({
  get: (key: string) => Promise.resolve(cache.get(key)),
  has: (key: string) => Promise.resolve(cache.has(key)),
  set: (key: string, value: unknown) => Promise.resolve(cache.set(key, value)),
  delete: (key: string) => Promise.resolve(cache.delete(key)),
})

const mem = memoizeP(cacheF)
const rngAsync = (num: number) => Promise.resolve(Math.random() * num)
const rngAsyncMemo = mem(rngAsync)

test('async', async () => {
  const result = await rngAsync(10)
  const memoResult = await rngAsyncMemo(10)

  expect(result).not.toEqual(memoResult)
  expect(memoResult).toEqual(await rngAsyncMemo(10))
})
