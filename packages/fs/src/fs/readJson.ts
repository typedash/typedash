import { S, TE } from '@typedash/typedash'
import fs, { ReadOptions } from 'fs-extra'

export const readJson =
  (options?: ReadOptions | BufferEncoding | string) => (file: string) =>
    TE.tryCatch(
      () => fs.readJson(file, options),
      (error) =>
        new Error(
          `"@typedash/fs:readJson" encountered an error: ${S.stringify(error)}`,
        ),
    )
