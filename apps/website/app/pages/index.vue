<template>
  <div class="landing-page">
    <Header />
    <Hero />
    <Features />
    <Installation />
    <Themes />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'JetBrains Icon Theme for VSCode',
  meta: [
    { name: 'description', content: 'Bring sleek JetBrains-inspired icons to Visual Studio Code. Modern, professional, and aesthetically pleasing.' }
  ]
})
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: #fff;
}
</style>
