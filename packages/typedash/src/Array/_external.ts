// https://gcanti.github.io/fp-ts/modules/Array.ts.html
export {
  append,
  appendW,
  chain,
  chop,
  chunksOf,
  concat,
  concatW,
  copy,
  difference,
  dropLeft,
  dropLeftWhile,
  dropRight,
  duplicate,
  elem, // R.includes (but with Eq)
  every, // R.all,
  exists, // R.any,
  filter,
  filterMap,
  filterMapWithIndex,
  filterWithIndex,
  findFirst,
  findFirstMap,
  findIndex,
  findLast,
  findLastIndex,
  findLastMap,
  flatten,
  fromPredicate,
  head,
  init,
  intersection,
  intersperse,
  isEmpty,
  isNonEmpty,
  last,
  lookup, // R.nth,
  makeBy,
  map,
  mapWithIndex,
  match,
  modifyAt,
  of,
  prepend,
  prependAll,
  prependW,
  reduce,
  reduceWithIndex,
  replicate, // R.repeat
  reverse,
  size,
  sortBy as sortByOrd,
  splitAt,
  tail,
  takeLeft,
  takeLeftWhile,
  takeRight,
  union,
  zip,
  zipWith,
  updateAt,
  uniq as uniqEq,
} from 'fp-ts/Array'

export {
  countBy,
  dropAt,
  endsWith,
  join,
  reject,
  slice,
  startsWith,
  sum,
  without,
  zipAll,
} from 'fp-ts-std/Array'

export { includes, sort, sortBy, groupWith, groupBy, uniq, uniqBy } from 'ramda'

export {
  included,
  lengthEq,
  lengthGt,
  lengthGte,
  lengthLt,
  lengthLte,
  lengthNotEq,
  isNotEmpty,
} from 'ramda-adjunct'
