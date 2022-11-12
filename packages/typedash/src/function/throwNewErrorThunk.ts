export const throwNewErrorThunk = (message: string) => () => {
  throw new Error(message)
}
