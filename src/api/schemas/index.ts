import { FetchConfig, FetchType } from '~/plugins/axios.client'
import { Schema } from '~/types/schema'

export const getSchema = ():Promise<Schema[]> => {
  const config:FetchConfig = {
    fetchType: FetchType.Get,
    url: '/schemas'
  }

  // use library from plugin
  return useNuxtApp().$apiService<Schema[]>(config)
}
