import { pipe } from '../function/_external'
import * as A from './index'

const isNumber = (x: unknown) => typeof x === 'number'

test('can access `fp-ts` functions', () => {
  expect(pipe(['something', 5], A.filter(isNumber))).toEqual([5])
})

test('can add functions to namespace', () => {
  expect(pipe([5], A.partitionAll([isNumber]))).toEqual([[5]])
})
