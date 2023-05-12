import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueDatePicker from '@vuepic/vue-datepicker'

const app = createApp(App)

app.component('VueDatePicker',VueDatePicker),

app.use(createPinia())

app.mount('#app')
