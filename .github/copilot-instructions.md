# VSCode JetBrains Icon Theme - AI Coding Agent Instructions

## Project Overview

This is a VSCode icon theme extension that provides JetBrains-style icons for files and folders. The project supports multiple theme variants:
- **V1 Dark**: Legacy single-theme format (`assets/v1/`)
- **2023+ UI**: Modern themes with Light, Dark, and Auto variants (`assets/2023/`)

## Architecture & Build System

### Source-to-Build Mapping
The build system transforms source themes into distribution-ready variants:
```
assets/v1/theme-dark.json → dist/v1/dark/theme.json
assets/2023/theme-light.json → dist/2023/light/theme.json  
assets/2023/theme-dark.json → dist/2023/dark/theme.json
[GENERATED] → dist/2023/auto/theme.json (merges light+dark with CSS media queries)
```

### Auto Theme Generation
The 2023+ Auto theme is **generated**, not manually maintained. It combines light and dark SVGs using CSS media queries:
- Light/dark icons are embedded in a single SVG with `.light`/`.dark` classes
- CSS `@media (prefers-color-scheme: dark)` handles theme switching
- Generated in `scripts/build/generators/generate-2023-auto-theme.ts`

## Icon Naming Conventions

Icons follow JetBrains naming patterns with suffixes:
- `icon.svg` - Light theme (no suffix)
- `icon_dark.svg` - Dark theme variant  
- Icons are sourced from [JetBrains Design Resources](https://intellij-icons.jetbrains.design/)

## Theme Structure

VSCode icon themes use this JSON structure:
```json
{
  "iconDefinitions": {
    "file_javascript": { "iconPath": "./icons/javaScript_dark.svg" }
  },
  "fileExtensions": {
    "js": "file_javascript"
  },
  "fileNames": {
    "package.json": "file_json"  
  },
  "folderNames": {
    "test": "folder_test"
  }
}
```

## Development Workflow

### Adding New Icons
1. Find SVG from [JetBrains icons](https://jetbrains.design/intellij/resources/icons_list/)
2. Add to `assets/2023/icons/` (or `assets/v1/icons/` for V1)
3. Update theme JSON:
   - Add to `iconDefinitions`
   - Map in `fileExtensions`, `fileNames`, or `folderNames`
4. Test: `npm run prebuild && npm run package` → install `.vsix` file

### Build Commands
- `npm run prebuild` - Generates themes and copies icons to `dist/`
- `npm run package` - Creates `.vsix` extension package
- Build script: `scripts/build/build.ts`

## Key Files for Icon Management

- `scripts/build/utils/build-theme.ts` - Copies theme JSON + referenced icons
- `scripts/build/utils/get-icon-paths.ts` - Extracts icon paths from theme definitions  
- `scripts/build/generators/generate-2023-auto-theme.ts` - Creates auto theme with CSS media queries
- `scripts/build/types/Theme.d.ts` - TypeScript type definitions

## Extension Configuration

The extension registers 4 icon themes in `package.json`:
- `vscode-jetbrains-icon-theme` (V1 Dark)
- `vscode-jetbrains-icon-theme-2023-light`
- `vscode-jetbrains-icon-theme-2023-dark` 
- `vscode-jetbrains-icon-theme-2023-auto`

## Testing & Validation

- No automated tests - manual verification by creating files with target extensions
- Build validates icon file existence (warns about missing icons)
- CI runs `npm run prebuild` to catch build issues

## Dependencies

- `svgson` - SVG parsing for auto theme generation
- `tsx` - TypeScript execution for build scripts
- `@vscode/vsce` - Extension packaging

## Special Patterns

- **File mapping precedence**: `fileNames` overrides `fileExtensions`
- **Test files**: Special icons for `*.test.js`, `*.test.ts`, etc.
- **Folder themes**: Special icons for common folder names (`test`, `vendor`, `controllers`)
- **Icon variants**: Some icons have both light and dark versions, others are theme-agnostic
