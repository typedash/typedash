import * as DATE from '../Date/_external'
import { pipe } from '../function/_external'
import { mapChunksP2 } from './mapChunksP'

const addOneP = (x: number) => Promise.resolve(x + 1)

test('smoke', async () => {
  const mapChunksP = mapChunksP2({
    chunksOf: 3,
    ms: DATE.mkMilliseconds(500),
  })

  const result = await pipe([1, 2, 3, 4, 5, 6, 7, 8], mapChunksP(addOneP))
  expect(result).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
})
