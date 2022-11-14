import { throwErrorThunk } from '../function/throwErrorThunk.js'
import * as O from './_external.js'

export const getOrThrowError = <A>(data: O.Option<A>): A | never =>
  O.getOrElseW(throwErrorThunk('Nothing'))(data)
