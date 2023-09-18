import * as fs from "node:fs";
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import * as svg from "svgson";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RELATIVE_ICONS_DIR_PATH = '../themes/2023/icons'
const ICONS_DIR_PATH = path.join(__dirname, RELATIVE_ICONS_DIR_PATH)

const BASE_THEME_JSON_PATH = path.join(__dirname, '../themes/2023/theme-light.json')
const AUTO_THEME_JSON_PATH = path.join(__dirname, '../themes/2023/theme-auto.json')

function removeExtension(fileName) {
    return path.basename(fileName, path.extname(fileName))
}

function removeExistingAutoIcons(dirPath) {
    for (const fileName of fs.readdirSync(dirPath)) {
        const fileNameWithoutExtension = removeExtension(fileName)
        const filePath = path.join(dirPath, fileName)

        if (fileNameWithoutExtension.endsWith('_auto')) {
            fs.rmSync(filePath)
        }
    }
}

function removeSuffix(fileName) {
    return removeExtension(fileName).split('_')[0]
}

function getIconName(fileName) {
    return removeSuffix(removeExtension(fileName))
}

function getIconNames(dirPath) {
    const iconNames = new Set()

    for (const fileName of fs.readdirSync(dirPath)) {
        if (path.extname(fileName) !== '.svg') {
            continue
        }

        iconNames.add(getIconName(fileName))
    }

    return iconNames
}

function getIconSource(dirPath, iconName) {
    const lightIconFileName = `${iconName}.svg`
    const lightIconFilePath = path.join(dirPath, lightIconFileName)

    const darkIconFileName = `${iconName}_dark.svg`
    const darkIconFilePath = path.join(dirPath, darkIconFileName)

    const lightIconSource = fs.readFileSync(lightIconFilePath, { encoding: 'utf8' })
    const darkIconSource = fs.existsSync(darkIconFilePath)
        ? fs.readFileSync(darkIconFilePath, { encoding: 'utf8' })
        : undefined

    return {
        lightIconSource,
        darkIconSource,
    }
}

function getAutoIconAst(iconName) {
    const { lightIconSource, darkIconSource } = getIconSource(ICONS_DIR_PATH, iconName)

    const lightIcon = svg.parseSync(lightIconSource)
    const darkIcon = darkIconSource !== undefined
        ? svg.parseSync(darkIconSource)
        : undefined

    return {
        name: 'svg',
        type: 'element',
        value: '',
        attributes: lightIcon.attributes,
        parent: null,
        children: [
            ...(darkIcon !== undefined ? [{
                name: "style",
                type: "element",
                value: "",
                parent: null,
                attributes: {},
                children: [
                    {
                        name: "",
                        type: "text",
                        value: ".dark { display: none; } .light { display: block; } @media (prefers-color-scheme: dark) { .dark { display: block; } .light { display: none; } }",
                        parent: null,
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
                parent: null,
                children: lightIcon.children,
            },
            ...(darkIcon !== undefined ? [{
                name: 'g',
                type: 'element',
                value: '',
                attributes: {
                    class: "dark"
                },
                parent: null,
                children: darkIcon.children,
            }] : []),
        ]
    }
}

function getAutoIconSource(iconName) {
    const autoIconAst = getAutoIconAst(iconName)

    return svg.stringify(autoIconAst)
}

function writeAutoIcon(dirPath, iconName) {
    const autoIconSource = getAutoIconSource(iconName)

    const autoIconFileName = `${iconName}_auto.svg`
    const autoIconFilePath = path.join(dirPath, autoIconFileName)

    fs.writeFileSync(autoIconFilePath, autoIconSource)
}

function buildAutoIcons(dirPath) {
    removeExistingAutoIcons(dirPath)

    const iconNames = getIconNames(dirPath)

    for (const iconName of iconNames) {
        writeAutoIcon(dirPath, iconName)
    }

    return iconNames
}

function createAutoTheme(themeJsonPath) {
    const themeJson = JSON.parse(fs.readFileSync(themeJsonPath, { encoding: 'utf8' }))

    const autoThemeJson = {
        ...themeJson,
        iconDefinitions: {},
    }

    const iconNames = buildAutoIcons(ICONS_DIR_PATH)

    for (const iconDefinition in themeJson.iconDefinitions) {
        const iconObj = themeJson.iconDefinitions[iconDefinition]

        const iconName = getIconName(path.basename(iconObj.iconPath))

        if (iconNames.has(iconName)) {
            autoThemeJson.iconDefinitions[iconDefinition] = {
                iconPath: `./icons/${iconName}_auto.svg`
            }
        } else {
            autoThemeJson.iconDefinitions[iconDefinition] = iconObj
        }
    }

    fs.writeFileSync(AUTO_THEME_JSON_PATH, JSON.stringify(autoThemeJson, null, 4))
}

createAutoTheme(BASE_THEME_JSON_PATH)
