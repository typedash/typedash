/* eslint-disable @typescript-eslint/ban-types */
export const getMemoizedFunctionCacheName = (
  fn: Function & { readonly displayName?: string },
  cacheKeyName?: string,
) => {
  if (cacheKeyName) {
    return cacheKeyName
  }

  const name = fn.displayName || fn.name

  if (!name) {
    throw new Error(
      'Provided function has no `displayName` or `name` and no explicit name was provided',
    )
  }

  return name
}

export const getMemoizedFunctionCacheKey =
  (fn: Function & { readonly displayName?: string }, cacheKeyName?: string) =>
  (args: Array<unknown>) =>
    `${getMemoizedFunctionCacheName(fn, cacheKeyName)}_${JSON.stringify(args)}`
