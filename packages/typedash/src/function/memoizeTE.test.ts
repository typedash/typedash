import { getOrThrowError } from '../TaskEither'
import * as TE from '../TaskEither/_external'
import { pipe } from './_external'
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
  const result = await pipe(10, rngTE, getOrThrowError)()
  const memoResult = await pipe(10, rngTEMemo, getOrThrowError)()
  const memoResult2 = await pipe(10, rngTEMemo, getOrThrowError)()

  expect(result).not.toEqual(memoResult)
  expect(memoResult).toEqual(memoResult2)
})
