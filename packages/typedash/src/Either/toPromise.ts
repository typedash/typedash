import { pipe } from '../function/_external'
import * as P from '../Promise'
import * as E from './_external'

export const toPromise = <E, A>(ma: E.Either<E, A>): Promise<A> =>
  pipe(
    ma,
    E.match(
      P.reject,
      // NOTE: TypeScript wants the result to be Promise<E | A> but that's
      //       now how this would actually end up, it's always Promise<A>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      P.resolve,
    ),
  )
