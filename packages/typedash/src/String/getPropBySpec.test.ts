import { pipe } from '../function/_external'
import * as O from '../Option/_external'
import { getPropBySpec } from './getPropBySpec'

test('found', () => {
  expect(
    pipe(
      'https://dank.biz/baz',
      getPropBySpec({ foo: ['baz'], bar: ['test', 'example'] }),
      O.getOrElseW(() => null),
    ),
  ).toEqual('foo')
})

test('not found', () => {
  expect(
    pipe(
      'https://dank.biz/baz',
      getPropBySpec({ foo: ['poopity', 'scoop'], bar: ['test', 'example'] }),
      O.getOrElseW(() => null),
    ),
  ).toEqual(null)
})
