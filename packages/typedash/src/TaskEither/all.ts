import * as AP from '../Apply/_external.js'
import * as TE from './_external.js'

export const all = AP.sequenceT(TE.ApplyPar)
