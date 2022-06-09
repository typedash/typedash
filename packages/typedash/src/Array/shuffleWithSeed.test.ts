import { shuffleWithSeed } from './shuffleWithSeed'

test('same order with same seed', () => {
  const seed = 69
  const input = [1, 2, 3, 4, 5]

  expect(shuffleWithSeed(seed)(input)).toEqual(shuffleWithSeed(seed)(input))
})

test('different order with different seed', () => {
  const input = [1, 2, 3, 4, 5]

  expect(shuffleWithSeed(69)(input)).not.toEqual(shuffleWithSeed(420)(input))
})
