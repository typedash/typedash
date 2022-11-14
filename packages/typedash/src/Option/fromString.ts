import { fromString as E_fromString } from '../Either/fromString.js'
import { flow } from '../function/index.js'
import { fromEither } from './_external.js'

export const fromString = flow(E_fromString, fromEither)
