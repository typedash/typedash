import * as AP from '../Apply/_external'
import * as T from './_external'

export const all = AP.sequenceT(T.ApplyPar)
