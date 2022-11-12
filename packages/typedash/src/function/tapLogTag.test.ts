import { pipe } from './_external'
import { tapLogTag } from './tapLogTag'

test('value is preserved', () => {
  const value = 'foo'
  expect(pipe(value, tapLogTag('hi'))).toEqual(value)
})
