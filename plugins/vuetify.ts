import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#36454F',
      surface: '#36454F',
      primary: '#EE8434',
      secondary: '#FFFAFB',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  }

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        theme:{
            defaultTheme:"myCustomLightTheme",
            themes:{
                myCustomLightTheme
            }
        },
        components,
        directives,
    })
    
    nuxtApp.vueApp.use(vuetify)
})
