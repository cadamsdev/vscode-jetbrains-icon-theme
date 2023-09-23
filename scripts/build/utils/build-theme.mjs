import * as fs from "node:fs";
import * as path from "node:path";

import { SRC_DIR_PATH } from "../constants.mjs";
import { getIconPaths } from "./get-icon-paths.mjs";

/**
 * Build a theme.
 * @param {string} themePath The path to the theme.
 * @param {string} buildPath The path to the build directory.
 */
export function buildTheme(themePath, buildPath) {
  const theme = JSON.parse(fs.readFileSync(themePath, "utf-8"));
  const iconPaths = getIconPaths(theme, themePath);

  fs.mkdirSync(buildPath, { recursive: true });

  fs.writeFileSync(
    path.join(buildPath, "theme.json"),
    JSON.stringify(theme, null, 4)
  );

  iconPaths.forEach((iconPath) => {
    if (!fs.existsSync(iconPath)) {
      console.warn(`Icon does not exist: ${iconPath}`);
      return;
    }

    const buildIconPath = path.join(
      buildPath,
      path.relative(path.dirname(themePath), iconPath)
    );

    fs.mkdirSync(path.dirname(buildIconPath), { recursive: true });
    fs.copyFileSync(iconPath, buildIconPath);
  });
}
