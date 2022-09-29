import { pipe } from '../function/_external'
import * as O from '../Option/_external'
import * as A from './_external'

export const rotate = <T>(data: Array<T>): Array<T> =>
  pipe(
    data,
    O.fromPredicate(A.isNonEmpty),
    O.map(([first, ...rest]) => [...rest, first]),
    O.getOrElseW<Array<T>>(() => []),
    (x) => x,
  )
