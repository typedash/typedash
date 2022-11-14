import mem from 'mem'
import { MEMOIZE_DEFAULT_TTL_MS } from './const'
import { getFunctionName } from './getFunctionName'
import { CacheStorage } from './types'

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
