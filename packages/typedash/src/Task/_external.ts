// https://gcanti.github.io/fp-ts/modules/Task.ts.html
export {
  ap,
  apFirst,
  ApplicativePar,
  ApplicativeSeq,
  ApplyPar,
  ApplySeq,
  apS,
  apSecond,
  ApT,
  bind,
  bindTo,
  chain,
  chainFirst,
  chainFirstIOK,
  chainIOK,
  delay,
  Do,
  flap,
  flatten,
  fromIO,
  fromIOK,
  fromTask,
  getRaceMonoid,
  map,
  Monad,
  MonadIO,
  MonadTask,
  never,
  of,
  sequenceArray,
  sequenceSeqArray,
  traverseArray,
  traverseArrayWithIndex,
  traverseReadonlyArrayWithIndex,
  traverseReadonlyArrayWithIndexSeq,
  traverseReadonlyNonEmptyArrayWithIndex,
  traverseReadonlyNonEmptyArrayWithIndexSeq,
  traverseSeqArray,
  traverseSeqArrayWithIndex,
} from 'fp-ts/Task'
export type { Task } from 'fp-ts/Task'

export {
  elapsed,
  execute,
  pass,
  sleep,
  unless,
  until,
  when,
} from 'fp-ts-std/Task'
