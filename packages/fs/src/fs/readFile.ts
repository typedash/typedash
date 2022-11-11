import { S, TE } from '@typedash/typedash'
import fs from 'fs-extra'

export const readFile =
  (encoding = 'utf-8') =>
  (file: number | fs.PathLike) =>
    TE.tryCatch(
      () => fs.readFile(file, encoding),
      (error) =>
        new Error(
          `"@typedash/fs:readFile" encountered an error: ${S.stringify(error)}`,
        ),
    )
