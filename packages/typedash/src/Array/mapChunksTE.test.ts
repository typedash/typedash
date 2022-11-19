import { fail } from '../_tests'
import * as DATE from '../Date/_external'
import { pipe } from '../function/_external'
import * as TE from '../TaskEither/_external'
import { mapChunksTE2 } from './mapChunksTE'

const addOneTE = (x: number) => TE.right(x + 1)

test('smoke', async () => {
  const mapChunksTE = mapChunksTE2({
    chunksOf: 3,
    ms: DATE.mkMilliseconds(500),
  })

  const result = await pipe(
    [1, 2, 3, 4, 5, 6, 7, 8],
    mapChunksTE(addOneTE),
    TE.getOrElse(fail),
  )()

  expect(result).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
})
