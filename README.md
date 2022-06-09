# Typedash Monorepo

## Setup

This repo uses `yarn 2/3/Berry` so there's no need to run `yarn install`. You should run `yarn setup` though to get `husky`, VSCode SDK, `hygen`, etc setup.

```sh
yarn setup
```

### Caveats

- If you're a [VSCode](https://code.visualstudio.com/) user, you need to perform two additional steps:
  - If it's the first time you're using yarn 2 in VSCode you'd want to install the yarn 2 VSCode sdk `yarn dlx @yarnpkg/sdks vscode`. You don't need to run the command every time you clone this project but the first time.
  - Press `shift + control + P` and type "Select TypeScript version". Then choose "Use workspace version".
  - More info [here](https://yarnpkg.com/getting-started/editor-sdks#vscode)

## Package Manager

We're leveraging `yarn`, specifically [Yarn 2](https://dev.to/arcanis/introducing-yarn-2-4eh1) for a multitude of reasons, but primarily that it plays better with Monorepos better than `npm` workspaces. [The docs](https://yarnpkg.com/cli/workspace) show all flags/commands, and here are some orchestration commands and examples:

Adding a dependency

```
# yarn workspace <package> add <dependency>
yarn workspace @typedash/typedash add ramda
```

Adding a dev dependency

```
# yarn workspace <package> add <dependency> -D
yarn workspace @typedash/typedash add @types/ramda -D
```

Running the same command in multiple packages.

```
# yarn workspaces foreach <command>
yarn workspaces foreach run build
```

Running a command in one package.

```
# yarn workspaces <package> <command>
yarn workspace @typedash/lead-api lint
```

## Dependency Management

When adding a dependency `yarn` will default to specifying `^` as the version requirement, which will allow for minor version upgrades implicitly. Due to issues with newer versions than are specified, this monorepo pins all dependency versions to the exact version. So after you add a dependency, simply remove the `^`.

When adding or removing a sibling dependency `@typedash/*` you will need to make sure the `references` property in the `tsconfig.json` and `tsconfig.cjs.json` are in sync. For example if a package depends on `@typedash/typedash` and `@typedash/models` the tsconfig files would need to contain:

```json
{
  "references": [
    { "path": "../typedash" },
  ],
   ...other properties
}
```

This helps signify to typescript that it's okay if it encounters source code from a sibling package but that we
don't want it included in the compiled output.

## Creating New Packages

Create new packages in the `package` directory just like you would if you were creating one outside the Monorepo. You'll have a `package.json` just like you normally would, but don't expect to have a `.lock`/`-lock.json` file at all the individual packages- that lock file lives at the root of the repository and `yarn` walks the tree to keep it up to date.

The minimum guidelines for a new package are that you have some of your `package.json` aligned with what the root `package.json` scripts expects. Those are the following:

| Command       | Description/use                                                |
| :------------ | :------------------------------------------------------------- |
| `clean`       | Cleans compilation/transpilation artifacts.                    |
| `build`       | Builds distribution files for the package.                     |
| `clean-build` | `clean` then `build`.                                          |
| `dev`         | Watches files and builds on change.                            |
| `lint`        | Runs `eslint`/`prettier` on the package.                       |
| `lint:fix`    | Runs `eslint`/`prettier` on the package and fixes what it can. |
| `format`      | Formats using `prettier`                                       |
| `test`        | Runs package tests.                                            |

### Code Generator

[`hygen`](http://www.hygen.io/) has been implemented at the root of the Monorepo to aid in creating new packages. Running the generator will create a new package with the latest monorepo package versions and required scripts already populated in the `package.json`. Once you've run `yarn setup` (see above), you'll have a global binary called `hygen` that you can call like this.

Show usage instructions for `package` generator.

```sh
hygen package help
```

Generate a new `package`- all files needed will be created on your branch. Note, you'll need to `yarn install` to register the package with `yarn 2`

```sh
hygen package new foo-bar
```

## Changesets

Refer to the [documentation for adding a changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md) for detailed instructions. Please include the following in your changeset:

> WHAT the change is
> WHY the change was made
> HOW a consumer should update their code
