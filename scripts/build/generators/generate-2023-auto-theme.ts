import * as fs from "node:fs";
import * as path from "node:path";

import * as svg from "svgson";

import { __dirname } from "../constants";
import { Theme } from "../types/Theme";

function removeExtension(fileName: string) {
  return path.basename(fileName, path.extname(fileName));
}

function removeSuffix(fileName: string) {
  return removeExtension(fileName).split("_")[0];
}

function getIconName(fileName: string) {
  return removeSuffix(removeExtension(fileName));
}

function getIcons(lightTheme: Theme, darkTheme: Theme) {
  const icons = {};

  const iconDefinitionsEntries = [
    ...Object.entries(lightTheme.iconDefinitions).map(
      ([iconDefinitionKey, iconDefinition]) =>
        [iconDefinitionKey, { ...iconDefinition, theme: "light" }] as const,
    ),
    ...Object.entries(darkTheme.iconDefinitions).map(
      ([iconDefinitionKey, iconDefinition]) =>
        [iconDefinitionKey, { ...iconDefinition, theme: "dark" }] as const,
    ),
  ];

  for (const [iconDefinitionKey, iconDefinition] of iconDefinitionsEntries) {
    if (!fs.existsSync(iconDefinition.iconPath)) {
      continue;
    }

    const iconName = getIconName(path.basename(iconDefinition.iconPath));

    if (!icons[iconDefinitionKey]) {
      icons[iconDefinitionKey] = {
        light: null,
        dark: null,
        iconName,
      };
    }

    const iconSource = fs.readFileSync(iconDefinition.iconPath, {
      encoding: "utf8",
    });
    const iconAst = svg.parseSync(iconSource);

    icons[iconDefinitionKey][iconDefinition.theme] = iconAst;
  }

  return icons;
}

function getAutoIconAst(
  lightIcon: svg.INode,
  darkIcon: svg.INode | null,
): svg.INode {
  return {
    name: "svg",
    type: "element",
    value: "",
    attributes: lightIcon.attributes,
    children: [
      ...(darkIcon !== null
        ? [
            {
              name: "style",
              type: "element",
              value: "",
              attributes: {},
              children: [
                {
                  name: "",
                  type: "text",
                  value:
                    ".dark { display: none; } .light { display: block; } @media (prefers-color-scheme: dark) { .dark { display: block; } .light { display: none; } }",
                  attributes: {},
                  children: [],
                },
              ],
            },
          ]
        : []),
      {
        name: "g",
        type: "element",
        value: "",
        attributes: {
          class: "light",
        },
        children: lightIcon.children,
      },
      ...(darkIcon !== null
        ? [
            {
              name: "g",
              type: "element",
              value: "",
              attributes: {
                class: "dark",
              },
              children: darkIcon.children,
            },
          ]
        : []),
    ],
  };
}

function buildAutoIcons(
  lightTheme: Theme,
  darkTheme: Theme,
  buildDirPath: string,
) {
  const icons = getIcons(lightTheme, darkTheme);

  const iconDefinitions = <Theme["iconDefinitions"]>{};
  fs.mkdirSync(path.join(buildDirPath, "icons"), { recursive: true });

  for (const iconDefinitionKey in icons) {
    const icon = icons[iconDefinitionKey];

    const autoIcon = getAutoIconAst(icon.light, icon.dark);
    const iconRelativePath = `./icons/${icon.iconName}_auto.svg`;

    fs.writeFileSync(
      path.join(buildDirPath, iconRelativePath),
      svg.stringify(autoIcon),
    );
    iconDefinitions[iconDefinitionKey] = {
      iconPath: iconRelativePath,
    };
  }

  return iconDefinitions;
}

function fixIconPaths(theme: Theme, themePath: string) {
  for (const iconDefinitionKey in theme.iconDefinitions) {
    const iconDefinition = theme.iconDefinitions[iconDefinitionKey];
    iconDefinition.iconPath = path.join(
      path.dirname(themePath),
      iconDefinition.iconPath,
    );
  }

  return theme;
}

export function generate2023AutoTheme(
  lightThemePath: string,
  darkThemePath: string,
  buildDirPath: string,
) {
  const lightTheme = fixIconPaths(
    JSON.parse(fs.readFileSync(lightThemePath, { encoding: "utf8" })) as Theme,
    lightThemePath,
  );
  const darkTheme = fixIconPaths(
    JSON.parse(fs.readFileSync(darkThemePath, { encoding: "utf8" })) as Theme,
    darkThemePath,
  );

  const autoTheme = {
    iconDefinitions: buildAutoIcons(lightTheme, darkTheme, buildDirPath),
    file: lightTheme.file,
    folder: lightTheme.folder,
    folderNames: {
      ...lightTheme.folderNames,
      ...darkTheme.folderNames,
    },
    fileNames: {
      ...lightTheme.fileNames,
      ...darkTheme.fileNames,
    },
    fileExtensions: {
      ...lightTheme.fileExtensions,
      ...darkTheme.fileExtensions,
    },
  };

  fs.mkdirSync(path.dirname(buildDirPath), { recursive: true });
  fs.writeFileSync(
    path.join(buildDirPath, "theme.json"),
    JSON.stringify(autoTheme, null, 4),
  );
}
