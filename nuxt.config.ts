import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:['vuetify/lib/styles/main.sass'],
    build:{
        transpile:[
            '@vuepic/vue-datepicker',
            'vuetify'
        ]
    },
    modules: [
        '@pinia/nuxt',
    ],
    pinia:{
        autoImports:[
            'defineStore'
        ]
    },
    runtimeConfig:{
        public:{
            apiBase:process.env.BACKEND_API_URL
        }
    }
})