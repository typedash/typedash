// TODO: move into `Number` module once that is created
const random = (seed: number) => {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

/**
 * @description
 * Shuffles an array's order in a predictable way given a numeric seed.
 *
 * @see https://stackoverflow.com/a/53758827
 */
export const shuffleWithSeed =
  (seed: number) =>
  <T = unknown>(arr_: Array<T>) => {
    const arr = [...arr_]
    let m = arr.length
    let t: T
    let i: number

    while (m) {
      i = Math.floor(random(seed) * m--)
      t = arr[m]
      arr[m] = arr[i]
      arr[i] = t
      ++seed
    }

    return arr
  }
