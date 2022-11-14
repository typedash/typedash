import { memoize } from './memoize'

const cache = new Map()
const mem = memoize(() => cache)
const rng = (num: number) => Math.random() * num
const rngMemo = mem(rng)

test('sync', () => {
  const result = rng(10)
  const memoResult = rngMemo(10)

  expect(result).not.toEqual(memoResult)
  expect(memoResult).toEqual(rngMemo(10))
})
