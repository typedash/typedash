import '@relmify/jest-fp-ts'
import { fail } from '../_tests'
import { pipe } from '../function/_external'
import * as TE from '../TaskEither/_external'
import { mapTESeq } from './mapTESeq'

const addOneTE = (x: number) => TE.right(x + 1)

test('smoke', async () => {
  const result = await pipe([1, 2, 3], mapTESeq(addOneTE), TE.getOrElse(fail))()
  expect(result).toEqual([2, 3, 4])
})
