import { Eq } from './_external.js'

export const equals = (x: boolean) => (y: boolean) => Eq.equals(x, y)
