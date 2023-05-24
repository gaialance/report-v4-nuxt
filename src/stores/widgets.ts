import { createPinia } from "pinia";
import { Widget } from '~/types/widget'

const storeKey: string = 'widgets-store';

export const widgetsStore = defineStore(storeKey, () => {
    // inital value of the widgets
    const widgets = ref<Widget[]>([])

    
})