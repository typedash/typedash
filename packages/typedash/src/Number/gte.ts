import { gte as _gte } from 'ramda'
import { flip } from '../function/_external'

/**
 * @note This is a `flip` version of `ramda.gte`
 */
export const gte = flip(_gte)
