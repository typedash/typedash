import pMemoize from 'p-memoize'
import { MEMOIZE_DEFAULT_TTL_MS } from './const'
import { getFunctionName } from './getFunctionName'
import { CacheStorage, CacheStorageContent } from './types'

export const memoizeP =
  <Ret>(
    cacheFactory: (
      ttlMs: number,
    ) => CacheStorage<string, CacheStorageContent<Ret>>,
  ) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <Fn extends (...args: Array<any>) => Promise<Ret>>(
    fn: Fn,
    ttlMs = MEMOIZE_DEFAULT_TTL_MS,
  ): Fn =>
    // @ts-ignore
    pMemoize(fn, {
      // @ts-ignore
      cache: cacheFactory(ttlMs),
      cacheKey: (args) => `${getFunctionName(fn)}_${JSON.stringify(args)}`,
    })
