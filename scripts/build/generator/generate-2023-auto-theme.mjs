import * as fs from "node:fs";
import * as path from 'node:path';

import * as svg from "svgson";

import { __dirname } from "../constants.mjs";

function removeExtension(fileName) {
    return path.basename(fileName, path.extname(fileName))
}

function removeSuffix(fileName) {
    return removeExtension(fileName).split('_')[0]
}

function getIconName(fileName) {
    return removeSuffix(removeExtension(fileName))
}

/**
 * @param {import("../types/Theme").Theme} lightTheme The light theme.
 * @param {import("../types/Theme").Theme} darkTheme The dark theme.
 * @returns {Record<string, { light: svg.INode, dark: svg.INode?, iconName: string }>} The icons.
*/
function getIcons(lightTheme, darkTheme) {
    const icons = {}

    const iconDefinitions = [
        ...Object.entries(lightTheme.iconDefinitions).map(([iconDefinitionKey, iconDefinition]) => /** @type {const} */ ([iconDefinitionKey, { ...iconDefinition, theme: 'light' }])),
        ...Object.entries(darkTheme.iconDefinitions).map(([iconDefinitionKey, iconDefinition]) => /** @type {const} */ ([iconDefinitionKey, { ...iconDefinition, theme: 'dark' }])),
    ]

    for (const [iconDefinitionKey, iconDefinition] of iconDefinitions) {
        if (!fs.existsSync(iconDefinition.iconPath)) {
            continue
        }

        const iconName = getIconName(path.basename(iconDefinition.iconPath))

        if (!icons[iconDefinitionKey]) {
            icons[iconDefinitionKey] = {
                light: null,
                dark: null,
                iconName,
            }
        }

        const iconSource = fs.readFileSync(iconDefinition.iconPath, { encoding: 'utf8' })
        const iconAst = svg.parseSync(iconSource)

        icons[iconDefinitionKey][iconDefinition.theme] = iconAst
    }

    return /** @type {any} */ (icons)
}

/**
 * @param {svg.INode} lightIcon The light icon.
 * @param {svg.INode?} darkIcon The dark icon.
 * @returns {svg.INode} The auto icon.
 */
function getAutoIconAst(lightIcon, darkIcon) {
    return {
        name: 'svg',
        type: 'element',
        value: '',
        attributes: lightIcon.attributes,
        children: [
            ...(darkIcon !== null ? [{
                name: "style",
                type: "element",
                value: "",
                attributes: {},
                children: [
                    {
                        name: "",
                        type: "text",
                        value: ".dark { display: none; } .light { display: block; } @media (prefers-color-scheme: dark) { .dark { display: block; } .light { display: none; } }",
                        attributes: {},
                        children: []
                    }
                ]
            }] : []),
            {
                name: 'g',
                type: 'element',
                value: '',
                attributes: {
                    class: "light"
                },
                children: lightIcon.children,
            },
            ...(darkIcon !== null ? [{
                name: 'g',
                type: 'element',
                value: '',
                attributes: {
                    class: "dark"
                },
                children: darkIcon.children,
            }] : []),
        ]
    }
}

/**
 * @param {import("../types/Theme").Theme} lightTheme The light theme.
 * @param {import("../types/Theme").Theme} darkTheme The dark theme.
 * @param {string} buildDirPath The path to the build directory.
 * @returns {import("../types/Theme").Theme['iconDefinitions']} The icon definitions.
*/
function buildAutoIcons(lightTheme, darkTheme, buildDirPath) {
    const icons = getIcons(lightTheme, darkTheme)

    const iconDefinitions = /** @type {import("../types/Theme").Theme['iconDefinitions']} */ ({})
    fs.mkdirSync(path.join(buildDirPath, 'icons'), { recursive: true })

    for (const iconDefinitionKey in icons) {
        const icon = icons[iconDefinitionKey]

        const autoIcon = getAutoIconAst(icon.light, icon.dark)
        const iconRelativePath = `./icons/${icon.iconName}_auto.svg`

        fs.writeFileSync(path.join(buildDirPath, iconRelativePath), svg.stringify(autoIcon))
        iconDefinitions[iconDefinitionKey] = {
            iconPath: iconRelativePath,
        }
    }

    return iconDefinitions
}

function fixIconPaths(theme, themePath) {
    for (const iconDefinitionKey in theme.iconDefinitions) {
        const iconDefinition = theme.iconDefinitions[iconDefinitionKey]
        iconDefinition.iconPath = path.join(path.dirname(themePath), iconDefinition.iconPath)
    }

    return theme
}

export function generate2023AutoTheme(lightThemePath, darkThemePath, buildDirPath) {
    const lightTheme = fixIconPaths(JSON.parse(fs.readFileSync(lightThemePath, { encoding: 'utf8' })), lightThemePath)
    const darkTheme = fixIconPaths(JSON.parse(fs.readFileSync(darkThemePath, { encoding: 'utf8' })), darkThemePath)

    /** @type {import("../types/Theme").Theme}*/ const autoTheme = ({
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
    })

    fs.mkdirSync(path.dirname(buildDirPath), { recursive: true })
    fs.writeFileSync(path.join(buildDirPath, "theme.json"), JSON.stringify(autoTheme, null, 4))
}
