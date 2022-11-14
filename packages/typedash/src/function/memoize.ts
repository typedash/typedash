import mem from 'mem'
import { MEMOIZE_DEFAULT_TTL_MS } from './const.js'
import { getFunctionName } from './getFunctionName.js'

// Types duplicated from `mem` since they're not exported and we can't patch
// the package in a yarn berry pnp repo yet
export type CacheStorageContent<ValueType> = {
  data: ValueType
  maxAge: number
}
export type CacheStorage<KeyType, ValueType> = {
  has: (key: KeyType) => boolean
  get: (key: KeyType) => CacheStorageContent<ValueType> | undefined
  set: (key: KeyType, value: CacheStorageContent<ValueType>) => void
  delete: (key: KeyType) => void
  clear?: () => void
}

// broken out as prettier was formatting weirdly due to the
// eslint comment above a generic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Args = Array<any>

export const memoize =
  <Ret>(cacheFactory: (ttlMs: number) => CacheStorage<string, Ret>) =>
  <Fn extends (...args: Args) => Ret>(
    fn: Fn,
    ttlMs = MEMOIZE_DEFAULT_TTL_MS,
  ): Fn =>
    mem(fn, {
      // @ts-ignore
      cache: cacheFactory(ttlMs),
      cacheKey: (args) => `${getFunctionName(fn)}_${JSON.stringify(args)}`,
    })
