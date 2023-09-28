import * as AP from '../Apply/_external'
import * as TO from './_external'

export const all = AP.sequenceT(TO.ApplyPar)
