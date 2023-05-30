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
    '@nuxtjs/eslint-module',
    './auto-import-eslint.ts'
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
