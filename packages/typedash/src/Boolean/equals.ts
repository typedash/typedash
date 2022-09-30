import { Eq } from './_external'

export const equals = (x: boolean) => (y: boolean) => Eq.equals(x, y)
