import { pipe } from './_external'
import { tapLogTagData } from './tapLogTagData'

const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => null)

test('value is preserved', () => {
  const value = 'foo'
  expect(pipe(value, tapLogTagData('hi'))).toEqual(value)
})

consoleLog.mockReset()
