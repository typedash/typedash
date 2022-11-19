import '@relmify/jest-fp-ts'
import { fail } from '../_tests'
import { pipe } from '../function/_external'
import * as TE from '../TaskEither/_external'
import { mapTEPar } from './mapTEPar'

const addOneTE = (x: number) => TE.right(x + 1)

test('smoke', async () => {
  const result = await pipe([1, 2, 3], mapTEPar(addOneTE), TE.getOrElse(fail))()
  expect(result).toEqual([2, 3, 4])
})
