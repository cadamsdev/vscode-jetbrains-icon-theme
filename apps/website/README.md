# JetBrains Icon Theme Website

Marketing website for the JetBrains Icon Theme VSCode extension built with Nuxt.js.

## Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Vue Scoped Styles**: All components use scoped CSS for style encapsulation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions

## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

```

Preview production build:

```bash
npm run preview
```

## Structure

```
app/
├── app.vue              # Root component
├── pages/
│   └── index.vue        # Landing page
└── components/
    ├── Header.vue       # Navigation header
    ├── Hero.vue         # Hero section with CTA
    ├── Features.vue     # Features grid
    ├── Installation.vue # Installation instructions
    ├── Themes.vue       # Theme showcase
    └── Footer.vue       # Footer with links
```

## Sections

1. **Header**: Sticky navigation with links to all sections
2. **Hero**: Eye-catching intro with install CTA and stats
3. **Features**: Grid showcasing key benefits (6 features)
4. **Installation**: Step-by-step installation guide (3 methods)
5. **Themes**: Overview of all available theme variants with previews
6. **Footer**: Links, resources, and support options

## Technologies

- **Nuxt.js 4**: Vue 3 framework with SSR capabilities
- **TypeScript**: Type-safe development
- **Vue Scoped Styles**: Component-level CSS with no global conflicts
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
