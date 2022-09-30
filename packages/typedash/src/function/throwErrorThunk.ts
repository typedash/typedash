export const throwErrorThunk = (data: unknown) => (): never => {
  // eslint-disable-next-line functional/no-throw-statement
  throw data
}
