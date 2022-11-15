/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import pMemoize, { CacheStorage } from '@typedash/p-memoize'
import * as E from '../Either'
import * as TE from '../TaskEither'
import { identity } from './_external'
import { MEMOIZE_DEFAULT_TTL_MS } from './const'
import { throwError } from './throwError'
import { getMemoizedFunctionCacheKey } from './utils'

export const memoizeTE =
  (cacheFactory: (ttlMs: number) => CacheStorage<string, unknown>) =>
  <E, Ret, Fn extends (...args: Array<any>) => TE.TaskEither<E, Ret>>(
    fn: Fn,
    options: { ttlMs: number; cacheKeyName?: string } = {
      ttlMs: MEMOIZE_DEFAULT_TTL_MS,
    },
  ): Fn =>
  // @ts-ignore
  (...args: Array<any>) => {
    const func = (...args_: Array<any>) =>
      fn(...args_)().then(
        E.match(throwError, (x) => {
          console.log('RIGht of match', x)
          return x
        }),
      )

    return TE.tryCatch(
      () =>
        pMemoize(
          func,
          {
            cache: cacheFactory(options.ttlMs) as CacheStorage<
              string,
              Awaited<ReturnType<typeof func>>
            >,
            cacheKey: getMemoizedFunctionCacheKey(fn, options.cacheKeyName),
          },
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        )(...args),
      (x) => x as E,
    )
  }
