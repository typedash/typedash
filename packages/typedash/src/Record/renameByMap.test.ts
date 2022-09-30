import { renameByMap } from './renameByMap'

test.each([
  [{ foo: 'renamed' }, { foo: 5 }, { renamed: 5 }],
  [
    { foo: 'renamed', bar: 'another' },
    { foo: 5, bar: 8 },
    { renamed: 5, another: 8 },
  ],
  [
    { foo: 'renamed', bar: 'another' },
    { foo: 5, bar: 'mixed types' },
    { renamed: 5, another: 'mixed types' },
  ],
])('renameByMap(%p)(%p) => %p', (keyMap, data, expected) => {
  expect(renameByMap(keyMap)(data)).toEqual(expected)
})
