#!/usr/bin/env zx
/* eslint-disable no-undef */
import "zx/globals";
import { rimrafSync } from "rimraf";

try {
  cd(path.join(__dirname, ".."));

  await rimrafSync([
    "src/data/icons/react",
    "src/data/icons/reactNative",
    "src/data/flags/react",
    "src/data/flags/reactNative",
  ]);

  await $`zx ./scripts/sync-families-dispatch.mjs`;

  await $`node ./scripts/buildReactIcons.js`;
  await $`node ./scripts/buildReactFlags.js`;

  await $`pnpm tsc --project src/tsconfig.json --watch`;
} catch (error) {
  console.log(chalk.red(error));
  process.exit(1);
}
