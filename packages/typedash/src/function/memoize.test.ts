import { memoize } from './memoize'

const mem = memoize(() => new Map())
const rng = (num: number) => Math.random() * num
const rngMemo = mem(rng)
const rngAsync = (num: number) => Promise.resolve(rng(num))
const rngAsyncMemo = mem(rngAsync)

test('sync', () => {
  const result = rng(10)
  const memoResult = rngMemo(10)

  expect(result).not.toEqual(memoResult)
  expect(memoResult).toEqual(rngMemo(10))
})

test('async', async () => {
  const result = await rngAsync(10)
  const memoResult = await rngAsyncMemo(10)

  expect(result).not.toEqual(memoResult)
  expect(memoResult).toEqual(await rngAsyncMemo(10))
})
