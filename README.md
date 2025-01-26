# Monorepo Project Overview

This is a monorepo project where Yarn workspaces are used to set up the monorepo system. The workspace contains the following main components:

- **`apps/`**: This folder contains all Expo projects.
- **`packages/`**: This folder holds all shared packages.
- **`package.json`**: Defines root-level dependencies.

## Install and Run This Project:

1. Clone the repository using the command:
   `git clone git@github.com:Zahraa-B/swiui-yarn-workspace.git.`
2. Navigate to the cloned repository directory. Install the dependencies by running either:
   `npm install` or `bash yarn install`
3. Navigate to the Expo app directory by moving to
   ` cd apps/cool-app`.
4. Start the development server by running either
   ` yarn start` or ` npx expo start`.
5. Press `w` to open the project in your web browser. (faster than simulator)

## About the Core Package

The `core` package (inside the `packages`) is a testing package that currently contains only one component: `Button.tsx`. Take a look at the `core` package to see the other files inside it.

In Yarn workspaces, you can test packages locally without publishing them to npm.

For example, in `apps/cool-app/app/(tabs)/index.tsx`, the button component is imported as a package:

```javascript
import { Button } from "core";
```

It is then used as a component:

```javascript
<View style={styles.btnContainer}>
  <Button label="Don't press" theme="primary" onPress={() => alert("HEHE")} />
</View>
```

This setup works by declaring the core package as a dependency in apps/cool-app/package.json:

```json
{
  "core": "*"
}
```

Afterward, run `yarn install` to treat the core package as a dependency.

## NativeWind Configuration

I aim to configure NativeWind individually inside each package instead of globally. If you look in packages/core, you will find the installation and configuration of NativeWind (which currently doesn't work).

### Possible Issues

- Hoisting in Yarn Workspaces: Hoisting might be linking dependencies (in subfolders) together with the root, causing conflicts.
- Incorrect Configuration: The way NativeWind is configured could be the issue.
- Nested Folder Configuration: Configuring NativeWind inside nested folders might be problematic, though configuring it in the root is not recommended.

Good luck! :)
