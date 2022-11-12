export const throwErrorThunk = (data: unknown) => (): never => {
  throw data
}
