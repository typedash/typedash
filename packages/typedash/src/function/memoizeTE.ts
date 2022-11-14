import pMemoize, { CacheStorage } from 'p-memoize'
import * as E from '../Either'
import * as TE from '../TaskEither'
import { identity } from './_external'
import { MEMOIZE_DEFAULT_TTL_MS } from './const'
import { getFunctionName } from './getFunctionName'
import { throwError } from './throwError'

export const memoizeTE =
  <Ret>(cacheFactory: (ttlMs: number) => CacheStorage<string, Ret>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <E, Fn extends (...args: Array<any>) => TE.TaskEither<E, Ret>>(
    fn: Fn,
    ttlMs = MEMOIZE_DEFAULT_TTL_MS,
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
            // @ts-ignore
            cache: cacheFactory(ttlMs),
            cacheKey: (args) =>
              `${getFunctionName(fn)}_${JSON.stringify(args)}`,
          },
          // eslint-disable-next-line max-len
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        )(...args).then(E.match(throwError, identity)),
      (x) => x as E,
    )
  }
