import { F, equals, startsWith } from 'ramda'

import { partitionAll } from './partitionAll'

const data = ['foo', 'foo', 'bar', 'bar', 'foo', 'baz', 'foo', 'foo']

describe('`filterAll`', () => {
  it('Correctly places values at index of predicate and evaluates values against multiple predicates', () => {
    expect(
      partitionAll([
        equals('foo'),
        equals('bar'),
        equals('baz'),
        startsWith('b'),
      ])(data),
    ).toEqual([
      ['foo', 'foo', 'foo', 'foo', 'foo'],
      ['bar', 'bar'],
      ['baz'],
      ['bar', 'bar', 'baz'],
    ])
  })

  it('Works with no matches for preds', () => {
    expect(partitionAll([equals('nope'), F])(data)).toEqual([[], []])
  })

  it('Works if there are no preds', () => {
    expect(partitionAll([])(data)).toEqual([])
  })
})
