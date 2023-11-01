import * as path from "node:path";

import { Theme } from "../types/Theme";

export function getIconPaths(theme: Theme, themePath = ""): string[] {
  return Object.values(theme.iconDefinitions).map((iconDefinition) =>
    path.join(path.dirname(themePath), iconDefinition.iconPath),
  );
}
