import { fromString as E_fromString } from '../Either/fromString'
import { flow } from '../function'
import { fromEither } from './_external'

export const fromString = flow(E_fromString, fromEither)
