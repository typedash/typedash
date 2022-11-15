import mem from 'mem'
import { MEMOIZE_DEFAULT_TTL_MS } from './const'
import { getMemoizedFunctionCacheKey } from './utils'

// Types duplicated from `mem` / `p-memoize` since they're not exported and we
// can't patch the package in a yarn berry pnp repo yet
export type CacheStorageContent<ValueType> = {
  data: ValueType
  maxAge: number
}

export type MemoizeCacheStorage<KeyType, ValueType> = {
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
  (cacheFactory: (ttlMs: number) => MemoizeCacheStorage<string, unknown>) =>
  <Ret, Fn extends (...args: Args) => Ret>(
    fn: Fn,
    options: { ttlMs: number; cacheKeyName?: string } = {
      ttlMs: MEMOIZE_DEFAULT_TTL_MS,
    },
  ): Fn =>
    mem(fn, {
      cache: cacheFactory(options.ttlMs) as MemoizeCacheStorage<
        string,
        ReturnType<Fn>
      >,
      cacheKey: getMemoizedFunctionCacheKey(fn, options.cacheKeyName),
    })
