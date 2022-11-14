import { MEMOIZE_DEFAULT_TTL_MS } from './const'
import { getFunctionName } from './getFunctionName'
import { CacheStorage, memoizePromise } from './utils'

export const memoizeP =
  <Ret>(cacheFactory: (ttlMs: number) => CacheStorage<string, Ret>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <Fn extends (...args: Array<any>) => Promise<Ret>>(
    fn: Fn,
    ttlMs = MEMOIZE_DEFAULT_TTL_MS,
  ): Fn =>
    memoizePromise(fn, {
      // @ts-ignore
      cache: cacheFactory(ttlMs),
      cacheKey: (args) => `${getFunctionName(fn)}_${JSON.stringify(args)}`,
    })
