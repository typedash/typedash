import * as AP from '../Apply/_external'
import * as TE from './_external'

export const all = AP.sequenceT(TE.ApplyPar)
