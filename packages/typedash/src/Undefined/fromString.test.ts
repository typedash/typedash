import { fromString } from './fromString'

test('handles empty string', () => {
  expect(fromString('')).toEqual(undefined)
})

test('handles undefined', () => {
  expect(fromString(undefined)).toEqual(undefined)
})

test('passes through populated strings', () => {
  expect(fromString('wat')).toEqual('wat')
})
