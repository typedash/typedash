import { stringify } from './stringify'

function funcDeclaration() {
  return 'foo'
}

const funcExpression = () => 'foo'

class Foo {
  x: string
  constructor(x: string) {
    this.x = x
  }
}

test('should be a func', () => {
  expect(stringify).toEqual(expect.any(Function))
})

test.each<[unknown, string]>([
  [42, '42'],
  ['foo', "'foo'"],
  [true, 'true'],
  [['foo', 'bar'], "['foo', 'bar']"],
  [
    { foo: { bar: { baz: 42 } } },
    '{\n  "foo": {\n    "bar": {\n      "baz": 42\n    }\n  }\n}',
  ],
  [new Date('1995-12-17T03:24:00Z'), '"1995-12-17T03:24:00.000Z"'],
  [NaN, 'NaN'],
  [() => null, '<fn>'],
  [funcDeclaration, 'funcDeclaration'],
  [funcExpression, 'funcExpression'],
  [Foo, 'Foo'],
  [new Foo('val'), '{\n  "x": "val"\n}'],
])('(%p) => %p', (x, expected) => {
  expect(stringify(x)).toEqual(expected)
})

// TODO: Removed first version of this function that uses `stringify-object`
//       because of ESModules. If that comes, back, these tests match up.
// test.each<[unknown, string]>([
//   [42, '42'],
//   ['foo', "'foo'"],
//   [true, 'true'],
//   [['foo', 'bar'], "['foo', 'bar']"],
//   [{ foo: { bar: { baz: 42 } } }, '{foo: {bar: {baz: 42}}}'],
//   [new Date('1995-12-17T03:24:00Z'), "new Date('1995-12-17T03:24:00.000Z')"],
//   [NaN, 'NaN'],
//   [() => null, '<fn>'],
//   [funcDeclaration, 'funcDeclaration'],
//   [funcExpression, 'funcExpression'],
//   [Foo, 'Foo'],
//   [new Foo('val'), "{x: 'val'}"],
// ])('(%p) => %p', (x, expected) => {
//   expect(stringify(x)).toEqual(expected)
// })
