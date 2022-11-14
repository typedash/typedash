// Types duplicated from `mem` / `p-memoize` since they're not exported and we
// can't patch the package in a yarn berry pnp repo yet
export type CacheStorageContent<ValueType> = {
  data: ValueType
  maxAge: number
}
export type CacheStorage<KeyType, ValueType> = {
  has: (key: KeyType) => boolean
  get: (key: KeyType) => CacheStorageContent<ValueType> | undefined
  set: (key: KeyType, value: CacheStorageContent<ValueType>) => void
  delete: (key: KeyType) => void
  clear?: () => void
}
