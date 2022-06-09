import { guardNullFunction } from './guardNullFunction'

const testFunction = jest.fn()
// eslint-disable-next-line @typescript-eslint/no-empty-function
const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

test('valid function arg', () => {
  guardNullFunction(testFunction)()
  expect(testFunction).toHaveBeenCalled()
})

test('invalid function arg', () => {
  guardNullFunction(undefined)()
  expect(consoleSpy).toHaveBeenCalledWith(
    'guardNullFunction: Function is undefined',
  )
})
