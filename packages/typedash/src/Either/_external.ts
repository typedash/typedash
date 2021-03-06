// https://gcanti.github.io/fp-ts/modules/Either.ts.html
export {
  Apply,
  bimap,
  bind,
  bindTo,
  bindW,
  chain,
  chainNullableK,
  chainOptionK,
  chainW,
  duplicate,
  filterOrElse,
  filterOrElseW,
  flatten,
  flattenW,
  fromNullable,
  fromNullableK,
  fromOption,
  fromOptionK,
  fromPredicate,
  getOrElse,
  getOrElseW,
  isLeft,
  isRight,
  left,
  map,
  mapLeft,
  match,
  matchW,
  orElse,
  orElseW,
  reduce,
  right,
  throwError,
  toError,
  tryCatch,
  tryCatchK,
} from 'fp-ts/Either'

export type { Either, Left, Right } from 'fp-ts/Either'

export { unsafeUnwrap } from 'fp-ts-std/Option'
