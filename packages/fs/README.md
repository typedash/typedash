# @typedash/fs

Wraps methods from `fs-extra` to make them more compatible with the `fp-ts` ecosystem.

## Installation

```sh
npm install @typedash/fs
yard add --save @typedash/fs
```

## Example

Below is an example of how you would/could use this package in your project.

```ts
import path from 'path'
import { z } from 'zod'
import { fs } from '@typedash/fs'
import { R, TE, flow, pipe } from '@typedash/typedash'

const PACKAGE_PATH = path.join(__dirname, '..', 'package.json')

const PackageJson = z.object({ name: z.string() })

pipe(
  VERSION_INFO_PATH,
  fs.readJson(),
  TE.chain(TE.fromZodParse(PackageJson)),
  TE.map(R.prop('name'))
  TE.logTag('🔢 PackageJson Name'),
)
// TE.TaskEither<Error, string>
```

## External References

| Package | Docs Url                                      |
| ------- | --------------------------------------------- |
| `fp-ts` | https://gcanti.github.io/fp-ts/modules/       |
| `fs`    | https://github.com/jprichardson/node-fs-extra |
