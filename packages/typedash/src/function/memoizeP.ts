import pMemoize, { CacheStorage } from '@typedash/p-memoize'
import { MEMOIZE_DEFAULT_OPTIONS } from './const'
import { MemoizeOptions } from './types'
import { getMemoizedFunctionCacheKey } from './utils'

export const memoizeP =
  (cacheFactory: (ttlMs: number) => CacheStorage<string, unknown>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <Ret, Fn extends (...args: Array<any>) => Promise<Ret>>(
    fn: Fn,
    options: MemoizeOptions = {},
  ): Fn => {
    const options_ = { ...MEMOIZE_DEFAULT_OPTIONS, ...options }
    return pMemoize(fn, {
      // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      cache: cacheFactory(options_.ttlMs) as CacheStorage<
        string,
        Awaited<ReturnType<typeof fn>>
      >,
      cacheKey: getMemoizedFunctionCacheKey(fn, options_.cacheKeyName),
    })
  }
