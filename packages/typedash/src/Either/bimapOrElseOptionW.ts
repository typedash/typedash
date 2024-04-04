import { pipe } from '../function/_external'
import * as O from '../Option'
import * as S from '../String'
import * as E from './_external'

/**
 * @description
 * Useful when you have `E.Either<Error, A>` and you want
 * to prevent the TE chain from failing because of the `Error`
 * and instead translate that `Error` and `A` to an
 * `O.Option<A>` while keeping the outer E. In short, can translate
 * `E.Either<Error, A>` -> `E.Either<never, O.Option<A>>`.
 * Because the `E` is "lost", this function will log it.
 *
 * @example
 * pipe(
 *   5, // number
 *   E.fromZodParse(z.number()), // E.Either<ZodError, number>
 *   E.bimapOrElseOptionW, // E.Either<never, O.Option<number>>
 * )
 */
export const bimapOrElseOptionW = <A, E>(
  ma: E.Either<E, A>,
): E.Either<never, O.Option<A>> =>
  pipe(
    ma,
    E.map(O.some),
    E.orElseW((error) => {
      console.warn(
        `⚠️ "E.bimapOrElseOptionW" coerced an error into a "O.None": ${S.stringify(
          error,
        )}`,
      )
      return E.right(O.none)
    }),
  )
