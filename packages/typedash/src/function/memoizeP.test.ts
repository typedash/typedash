import { memoizeP } from './memoizeP'

const cache = new Map()
const mem = memoizeP(() => cache)
const rngAsync = (num: number) => Promise.resolve(Math.random() * num)
const rngAsyncMemo = mem(rngAsync)

test('async', async () => {
  const result = await rngAsync(10)
  const memoResult = await rngAsyncMemo(10)

  expect(result).not.toEqual(memoResult)
  expect(memoResult).toEqual(await rngAsyncMemo(10))
})
