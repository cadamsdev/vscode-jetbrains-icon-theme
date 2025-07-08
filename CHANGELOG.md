## 2.34.0 (2025-07-08)

### 🚀 New Features
- Add support for OpenTofu file icons in light and dark themes ([#156](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/156))

# Changes
* added opentofu.svg
* referenced `opentofu` using `file_opentofu`
* associated `file_opentofu` with `tofu` extension
* fixed some typos in `theme-light.json` and `theme-dark.json` by
comparing the two files and making them consistent

# Screenshot 

* New icon in my VSCode after installing the local extension
<img width="196" alt="image"
src="https://github.com/user-attachments/assets/0c62a262-ac6a-44f2-8bac-33d26198b1fe"
/>
- Add support for Handlebars file icons in light and dark themes ([#155](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/155))

Co-authored-by: Chad Adams <cadamsdev@outlook.com>
- Add support for .cmake files and CMakeCache.txt files ([#154](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/154))
- Add support for razor files ([#152](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/152))

This PR simply extends support and reuses the `cshtml` icon for `.razor`
file extension.
V1 has no corresponding file to use. 

![image](https://github.com/user-attachments/assets/c8d62e13-8586-425b-ad11-9f86f278e98d)

Co-authored-by: Mark Novak <M.Novak@devware.de>
- Added Arduino (ino) and jinja icons ([#147](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/147))
- Add support for .jsonc and .json5 ([#149](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/149)) (#150)
- Add lockfile icons ([#146](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/146))
- Added db-related icons ([#142](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/142))

Closes
https://github.com/cadamsdev/vscode-jetbrains-icon-theme/issues/141

### Common Database File Extensions

1. .db – Generic database file (used by SQLite and others).
2. .sqlite – SQLite database file.
3. .sqlite3 – SQLite version 3 database file.
4. .db3 – SQLite database file (alternative extension).
5. .accdb – Microsoft Access database file (modern).
6. .mdb – Microsoft Access database file (legacy).
7. .dbf – dBase database file (used by FoxPro and others).
8. .ndf – SQL Server secondary database file.
9. .ibd – MySQL/MariaDB InnoDB storage file.
10. .frm – MySQL/MariaDB table schema definition file (closely tied to
the DB).
11. .ora – Oracle database file.

### Light theme:
<img width="224" alt="image"
src="https://github.com/user-attachments/assets/da9a3308-eb41-436e-8fee-7ffb5e8eade8"
/>

### Dark theme:
<img width="145" alt="image"
src="https://github.com/user-attachments/assets/71b50782-8c73-4f27-947e-2e5847dccde7"
/>
- Add icons for cuda files ([#138](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/138))

![image](https://github.com/user-attachments/assets/1d78f397-ecb8-4beb-9366-739ccba6db04)

Add icons for CUDA source (`.cu`) and header (`.cuh`) files.
- Add js.test, jsx.test, ts.test, tsx.test files ([#137](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/137))

![image](https://github.com/user-attachments/assets/d97d72bc-25af-4517-8517-da2b9b537f8a)


Closes
https://github.com/cadamsdev/vscode-jetbrains-icon-theme/issues/136
- Add icons for Rails-related folders ([#135](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/135))
- Add icon for gql extension ([#133](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/133))

Added `gql` extension to icons
- New go.mod, go.sum, go.work file icons, new vendor and test folder icons ([#132](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/132))

#131
- New protobuf file icon ([#130](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/130))

#129
- Add ocaml icons ([#127](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/127))
- Add c++20 module file extensions ([#124](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/124))

Adds support for common C++20 module interface file extensions.

Fixes #123
- Add .bat and .ps1 icons ([#122](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/122))

Add icons for .bat and .ps1 file extensions
- Add .pyi and .pyc icons ([#121](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/121))

Add Python icons for the extensions .pyi and .pyc in both themes.
- Added icon for gitkeep and graphql ([#119](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/119))

Co-authored-by: Chad Adams <cadamsdev@outlook.com>
- Bump version
- Added icons for go manifest files, hcl, rego, *.exe, protobuf
- Add elixir icons
- Add "auto" variant for 2023 icons
- Add icons for .gitmodule and cpp files
- Add icon for .eslintrc.json
- Add icons for yarn pnpm and eslint
- Add icons for cjs mjs cts mts files
- Add icon for .gitattributes
- Add support for C#

This adds C# icons for the 2023 dark and light icon themes.

Resolves: #89
- Added icon for rust-toolchain.toml
- Added icon for eslint
- Added icon for angular
- Added icon for postcss
- Added icon for vite
- Added icon for tailwind
- Added rust icons
- Added icon for CMakeLists.txt
- Added icon for pnpm-lock.yaml
- Added icon for .svelte
- Added icon for .env files
- Added icon for .cfg
- Added icon for Makefile
- Added icon for .php
- Added icon for .as
- Added icon for Dockerfile
- Added icon for .http, .rest
- Added icon for .go
- Added icon for .tf
- Added icon for .py
- Added icon for .toml
- Supply cmake.svg
- Add cmake.svg
- Added icon for .dockerignore
- Added icon for .gz, .zip, .rar, .7z, .tar
- Added icon for .scala
- Added icon for .h, .hpp, .c, .cpp
- Added icon for .sh, .zsh, .bash
- Added icon for .properties
- Added icon for README, .md
- Added new dark theme
BREAKING CHANGE:
- Added icon for yarn.lock
- Added icon for .sql
- Added icon for .xml
- Added icon for .java
- Added icon for .yml, .yaml
- Added icon for .ttf, .woff, .otf, .eot
- Added icon for .png, .webp, .jpg, .ico, .svg
- Added icon for .editorconfig
- Added icon for .vue
- Added icon for .csv
- Added icon for .ts
- Added icon for .js
- Added icon for .gitignore
- Added icon for .less
- Added icon for .jsx, .tsx
- Added icon for .html
- Added icon for .json
- Added icon for .scss, sass
- Setup a new theme for the new icons
- Trigger release, setup release automation
- Added support for html.erb files
- Added icon for html.erb files
- Added postcss icon

### 🐛 Bug Fixes
- Jsx icon ([#140](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/140))

Fixes issue #139
- Attempt to fix latest release
- Dark ruby icon path
- Image not showing up in README
- Icon for .gitignore
- Author url
- Version
- Github owner name

### 🏠 Chores
- Updated pacakge.json
- Remove unused icons
- Update automation to publish vsce package
- Updated automation git user
- Move away from @semantic-release use custom automation ([#120](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/120))
- Updated license year
- Run prebuild instead of build
- Match jpeg files as image
- Added .nvmrc
- Install @vscode/vsce as a dev dep so we don't have to install globally
- Rename theme v2 to 2023
- Rename theme files
- Change theme names
- Updated README include v2 dark theme
- Move preview.png to v1 theme
- Replace logo
- Remove test files
- Added node_modules to gitignore
- Setup build script
- Remove test directory
- Setup automation
- Added test files for postcss
- Add test file for webp

### 📖 Documentation
- Updated contributing doc
- Updated README ([#144](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/144))
- Added a donate link
- Fix images not showing up in the README
- Add documentation for how to contribute

### 📦 Build
- Use typescript for build scripts

### 🤖 Automation
- Setup lazy-release-action ([#158](https://github.com/cadamsdev/vscode-jetbrains-icon-theme/pull/158))