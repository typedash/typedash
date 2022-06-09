// https://gcanti.github.io/fp-ts/modules/Option.ts.html
export {
  Apply,
  bind,
  bindTo,
  chain,
  chainEitherK,
  chainNullableK,
  filter,
  filterMap,
  flatten,
  fromEither,
  fromEitherK,
  fromNullable,
  fromNullableK,
  fromPredicate,
  getLeft,
  getMonoid,
  getOrElse,
  getOrElseW,
  getRight,
  isNone,
  isSome,
  map,
  match,
  matchW,
  none,
  of,
  reduce,
  some,
  toNullable,
  toUndefined,
} from 'fp-ts/Option'

export type { Option, Some, None } from 'fp-ts/Option'

export { unsafeUnwrap } from 'fp-ts-std/Option'
