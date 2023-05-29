import { Widget } from '~/types/widget'

const storeKey = 'widgets-store'

export const widgetsStore = defineStore(storeKey, () => {
  // inital value of the widgets
  const widgets = ref<Widget[]>([])
  return {
    widgets
  }
})
