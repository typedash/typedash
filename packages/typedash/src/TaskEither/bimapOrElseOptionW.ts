import { pipe } from '../function/_external'
import * as O from '../Option'
import * as S from '../String'
import * as TE from './_external'

/**
 * @description
 * Useful when you have `TE.TaskEither<Error, A>` and you want
 * to prevent the TE chain from failing because of the `Error`
 * and instead translate that `Error` and `A` to an
 * `O.Option<A>` while keeping the outer TE. In short, can translate
 * `TE.TaskEither<Error, A>` -> `TE.TaskEither<never, O.Option<A>>`.
 * Because the `E` is "lost", this function will log it.
 *
 * @example
 * pipe(
 *   5, // number
 *   TE.fromZodParse(z.number()), // TE.TaskEither<ZodError, number>
 *   TE.bimapOrElseOptionW, // TE.TaskEither<never, O.Option<number>>
 * )
 */
export const bimapOrElseOptionW = <A, E>(
  ma: TE.TaskEither<E, A>,
): TE.TaskEither<never, O.Option<A>> =>
  pipe(
    ma,
    TE.map(O.some),
    TE.orElseW((error) => {
      console.warn(
        `⚠️ "TE.bimapOrElseOptionW" coerced an error into a "O.None": ${S.stringify(
          error,
        )}`,
      )
      return TE.right(O.none)
    }),
  )
