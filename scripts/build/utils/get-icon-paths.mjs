import * as path from "node:path";

/**
 * @param {import("../types/Theme").Theme} theme The theme to get the icon paths for.
 * @param {string} themePath The path to the theme.
 * @returns {string[]} All the paths to the icons in the theme.
 */
export function getIconPaths(theme, themePath = '') {
    return Object.values(theme.iconDefinitions)
      .map((iconDefinition) =>
        path.join(path.dirname(themePath), iconDefinition.iconPath)
      );
}
