import { FetchConfig, FetchType } from '~/plugins/axios.client'
import { useQueryStore } from '~/stores/queries'
import { Restaurant, RestaurantRaw, Warehouse, WarehouseRaw } from '~/types/business'
import { Schema } from '~/types/schema'

const convertToRestaurant = (data: RestaurantRaw): Restaurant => {
  return {
    id: data._id,
    name: data.profile.name
  }
}

const convertToWarehouse = (data: WarehouseRaw): Warehouse => {
  return {
    id: data._id,
    name: data.profile.name
  }
}

export const getRestaurantOptions = async (): Promise<Restaurant[]> => {
  const { businessId } = useQueryStore()
  const config: FetchConfig = {
    fetchType: FetchType.Get,
    url: `/${businessId}/restaurants`
  }
  const restaurants = (await useNuxtApp().$apiService<RestaurantRaw[]>(config)).map((data) => {
    return convertToRestaurant(data)
  })
  return restaurants
}

export const getWareHouseOptions = async (): Promise<Warehouse[]> => {
  const { businessId } = useQueryStore()
  const config: FetchConfig = {
    fetchType: FetchType.Get,
    url: `/${businessId}/warehouses`
  }
  const warehouses = (await useNuxtApp().$apiService<WarehouseRaw[]>(config)).map((data) => {
    return convertToWarehouse(data)
  })

  return warehouses
}

export const getBusiness = ():Promise<Schema[]> => {
  const { businessId } = useQueryStore()

  const config:FetchConfig = {
    fetchType: FetchType.Get,
    url: `/${businessId}`
  }

  // use library from plugin
  return useNuxtApp().$apiService<Schema[]>(config)
}
