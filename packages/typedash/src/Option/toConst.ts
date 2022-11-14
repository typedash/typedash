import * as O from './_external.js'

export const toConst = <T>(constant: T) => O.getOrElse(() => constant)
