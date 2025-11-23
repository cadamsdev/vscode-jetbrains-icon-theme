// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  app: {
    head: {
      title: 'JetBrains Icon Theme for VSCode',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Transform your Visual Studio Code with sleek, professional icons inspired by JetBrains IntelliJ products. Free and open source.' },
        { name: 'keywords', content: 'vscode, visual studio code, icons, theme, jetbrains, intellij, icon theme, vscode extension' },
        { property: 'og:title', content: 'JetBrains Icon Theme for VSCode' },
        { property: 'og:description', content: 'Transform your Visual Studio Code with sleek, professional icons inspired by JetBrains IntelliJ products.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'JetBrains Icon Theme for VSCode' },
        { name: 'twitter:description', content: 'Transform your Visual Studio Code with sleek, professional icons inspired by JetBrains IntelliJ products.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
