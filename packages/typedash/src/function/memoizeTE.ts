/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import pMemoize, { CacheStorage } from '@typedash/p-memoize'
import * as E from '../Either'
import * as TE from '../TaskEither'
import { identity } from './_external'
import { MEMOIZE_DEFAULT_OPTIONS } from './const'
import { throwError } from './throwError'
import { MemoizeOptions } from './types'
import { getMemoizedFunctionCacheKey } from './utils'

export const memoizeTE =
  (cacheFactory: (ttlMs: number) => CacheStorage<string, unknown>) =>
  <E, Ret, Fn extends (...args: Array<any>) => TE.TaskEither<E, Ret>>(
    fn: Fn,
    options: MemoizeOptions = {},
  ): Fn =>
  // @ts-ignore
  (...args: Array<any>) => {
    const options_ = { ...MEMOIZE_DEFAULT_OPTIONS, ...options }
    const func = (...args_: Array<any>) =>
      fn(...args_)().then(E.match(throwError, identity))

    return TE.tryCatch(
      () =>
        pMemoize(
          func,
          {
            cache: cacheFactory(options_.ttlMs) as CacheStorage<
              string,
              Awaited<ReturnType<typeof func>>
            >,
            cacheKey: getMemoizedFunctionCacheKey(fn, options_.cacheKeyName),
          },
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        )(...args),
      (x) => x as E,
    )
  }
