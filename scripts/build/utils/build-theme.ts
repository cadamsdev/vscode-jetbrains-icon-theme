import * as fs from "fs";
import * as path from "path";

import { getIconPaths } from "./get-icon-paths";

export function buildTheme(themePath: string, buildPath: string) {
  const theme = JSON.parse(fs.readFileSync(themePath, "utf-8"));
  const iconPaths = getIconPaths(theme, themePath);

  fs.mkdirSync(buildPath, { recursive: true });

  fs.writeFileSync(
    path.join(buildPath, "theme.json"),
    JSON.stringify(theme, null, 4),
  );

  iconPaths.forEach((iconPath) => {
    if (!fs.existsSync(iconPath)) {
      console.warn(`Icon does not exist: ${iconPath}`);
      return;
    }

    const buildIconPath = path.join(
      buildPath,
      path.relative(path.dirname(themePath), iconPath),
    );

    fs.mkdirSync(path.dirname(buildIconPath), { recursive: true });
    fs.copyFileSync(iconPath, buildIconPath);
  });
}
