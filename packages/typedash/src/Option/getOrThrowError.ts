import { throwErrorThunk } from '../function/throwErrorThunk'
import * as O from './_external'

export const getOrThrowError = <A>(data: O.Option<A>): A | never =>
  O.getOrElseW(throwErrorThunk('Nothing'))(data)
