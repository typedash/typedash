import { lte as _lte } from 'ramda'
import { flip } from '../function/_external'

/**
 * @note This is a `flip` version of `ramda.lte`
 */
export const lte = flip(_lte)
