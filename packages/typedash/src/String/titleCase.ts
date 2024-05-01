import { pipe } from '../function/_external'
import * as NEA from '../NonEmptyArray/_external'
import { capitalize } from './capitalize'
import { split } from './split'

export const titleCase = (data: string): string =>
  pipe(data, split(/[-_ ]/g), NEA.map(capitalize), NEA.join(' '))
