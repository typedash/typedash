import { pipe } from '../function/_external'
import * as E from './_external'

export const toPromise = <E, A>(ma: E.Either<E, A>): Promise<A> =>
  pipe(
    ma,
    E.match(
      (e) => Promise.reject(e),
      (x) => Promise.resolve(x),
    ),
  )
