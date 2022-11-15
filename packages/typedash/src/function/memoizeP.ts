import pMemoize, { CacheStorage } from '@typedash/p-memoize'
import { MEMOIZE_DEFAULT_TTL_MS } from './const'
import { getMemoizedFunctionCacheKey } from './utils'

export const memoizeP =
  (cacheFactory: (ttlMs: number) => CacheStorage<string, unknown>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <Ret, Fn extends (...args: Array<any>) => Promise<Ret>>(
    fn: Fn,
    options: { ttlMs: number; cacheKeyName?: string } = {
      ttlMs: MEMOIZE_DEFAULT_TTL_MS,
    },
  ): Fn =>
    pMemoize(fn, {
      // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      cache: cacheFactory(options.ttlMs) as CacheStorage<
        string,
        Awaited<ReturnType<typeof fn>>
      >,
      cacheKey: getMemoizedFunctionCacheKey(fn, options.cacheKeyName),
    })
