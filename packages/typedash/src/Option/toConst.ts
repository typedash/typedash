import * as O from './_external'

export const toConst = <T>(constant: T) => O.getOrElse(() => constant)
