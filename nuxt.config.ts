import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: [
      '@vuepic/vue-datepicker',
      'vuetify'
    ]
  },
  modules: [
    '@pinia/nuxt',
<<<<<<< HEAD
    '@nuxtjs/eslint-module'
=======
    '@nuxtjs/eslint-module',
    './auto-import-eslint.ts'
>>>>>>> f9874f37fec76ae03bc670f0c9f54968b5ffe3c4
  ],
  pinia: {
    autoImports: [
      'defineStore'
    ]
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.BACKEND_API_URL
    }
  },
  srcDir: 'src/',
  // default all page dont have SSR
  ssr: false,
  dir: {
    assets: 'src/assets',
    public: 'src/public'
  }
})
