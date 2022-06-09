import { getFunctionName } from './getFunctionName'

test('function expression', () => {
  const foobar = () => 420
  expect(getFunctionName(foobar)).toEqual('foobar')
})

test('function declaration', () => {
  function helloworld() {
    return 69
  }

  expect(getFunctionName(helloworld)).toEqual('helloworld')
})

test('displayName', () => {
  const baz = () => 0
  baz.displayName = 'customName'
  expect(getFunctionName(baz)).toEqual('customName')
})
