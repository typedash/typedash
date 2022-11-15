import pMemoize, { CacheStorage } from '@typedash/p-memoize'
import * as E from '../Either'
import * as TE from '../TaskEither'
import { identity } from './_external'
import { MEMOIZE_DEFAULT_TTL_MS } from './const'
import { throwError } from './throwError'
import { getMemoizedFunctionCacheKey } from './utils'

export const memoizeTE =
  (cacheFactory: (ttlMs: number) => CacheStorage<string, unknown>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <E, Ret, Fn extends (...args: Array<any>) => TE.TaskEither<E, Ret>>(
    fn: Fn,
    options: { ttlMs: number; cacheKeyName?: string } = {
      ttlMs: MEMOIZE_DEFAULT_TTL_MS,
    },
  ): Fn =>
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...args: Array<any>) => {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
    const func = (...args_: Array<any>) => fn(...args_)()

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
          // eslint-disable-next-line max-len
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        )(...args).then(E.match(throwError, identity)),
      (x) => x as E,
    )
  }
