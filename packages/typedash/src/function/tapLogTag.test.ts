import { pipe } from './_external'
import { tapLogTag } from './tapLogTag'

const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => null)

test('value is preserved', () => {
  const value = 'foo'
  expect(pipe(value, tapLogTag('hi'))).toEqual(value)
})

consoleLog.mockReset()
