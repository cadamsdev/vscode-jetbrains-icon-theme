// This script is used to prepare the build directory of the icon set.

import * as fs from "node:fs";
import * as path from "node:path";

import { SRC_DIR_PATH, BUILD_DIR_PATH } from "./constants.js";
import { generate2023AutoTheme } from "./generators/generate-2023-auto-theme";
import { buildTheme } from "./utils/build-theme.js";

// Here is the mapping of the source theme directory to the build theme directory.
//
// assets/v1/theme-dark.json -> build/themes/v1/dark/theme-dark.json
// assets/2023/theme-light.json -> build/themes/2023/light/theme-light.json
// assets/2023/theme-dark.json -> build/themes/2023/dark/theme-dark.json
// [GENERATED] -> build/themes/2023/auto/theme-auto.json

// STEP 1: Remove existing build directory.
if (fs.existsSync(BUILD_DIR_PATH)) {
  fs.rmSync(BUILD_DIR_PATH, { recursive: true });
}

// STEP 2: Create build directory.
fs.mkdirSync(BUILD_DIR_PATH, { recursive: true });

// STEP 3: Build themes.
buildTheme(
  path.join(SRC_DIR_PATH, "v1", "theme-dark.json"),
  path.join(BUILD_DIR_PATH, "v1", "dark"),
);
buildTheme(
  path.join(SRC_DIR_PATH, "2023", "theme-light.json"),
  path.join(BUILD_DIR_PATH, "2023", "light"),
);
buildTheme(
  path.join(SRC_DIR_PATH, "2023", "theme-dark.json"),
  path.join(BUILD_DIR_PATH, "2023", "dark"),
);

// STEP 4: Generate 2023 auto theme.
generate2023AutoTheme(
  path.join(SRC_DIR_PATH, '2023', 'theme-light.json'),
  path.join(SRC_DIR_PATH, '2023', 'theme-dark.json'),
  path.join(BUILD_DIR_PATH, '2023', 'auto')
)
