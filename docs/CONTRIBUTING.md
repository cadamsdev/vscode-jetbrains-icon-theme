# How to contribute

## Adding a new icon

1. Find an icon in SVG format (Most icons are from [here](https://jetbrains.design/intellij/resources/icons_list/))
2. Make sure you have [node.js](https://nodejs.org/en) installed
   - We recommend installing node via [nvm](https://github.com/nvm-sh/nvm)
     - Run `nvm install v18`
     - Run `nvm use`
3. Add the svg to the icons theme folder
   - Either [themes/2023/icons](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/tree/main/themes/2023/icons) or [themes/v1/icons](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/tree/main/themes/v1/icons)
4. Update the theme json file
   - Update `iconDefinitions`
   - Update `fileNames` or `fileExtensions`
5. To test the new icon, run in terminal `npm run build`. This should create a *.vsix file. In VSCode right click on that file click "Install Extension VSIX".
   - Once that is installed, change the icon theme to the theme that has your new icon. e.g mac Command + Shift + P -> Preferences: File Icon Theme -> e.g JetBrains Icon Theme 2023+ UI Dark
   - Create an empty file with the file name or file extension to verify your icon shows up.

## Commit messages

- We use [semantic-release](https://semantic-release.gitbook.io/semantic-release/), so please follow their commit message format as documented [here](https://semantic-release.gitbook.io/semantic-release/#commit-message-format).
  - Prefix your commits with feat:, fix:, chore: etc (see [here](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#type))
