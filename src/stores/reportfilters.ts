import { DateTime } from 'luxon'
import { defineStore } from 'pinia'
import { Restaurant, Warehouse } from '~/types/business'

const storeKey = 'report-filter'

export const useReportFilterStore = defineStore(storeKey, () => {
  // variables
  const timeFormat = 'HH:mm'
  const dateFormat = 'dd/M/yyyy'

  // variable after reformating
  const startDateTime = computed<Date>(() => DateTime.now().startOf('day').toJSDate())
  const endDateTime = computed<Date>(() => DateTime.now().endOf('day').toJSDate())
  const dates = ref<Date[]>([startDateTime.value, endDateTime.value])
  const startTime = computed<string>(() => `${DateTime.fromJSDate(dates.value[0]).toFormat(timeFormat)}`)
  const endTime = computed<string>(() => `${DateTime.fromJSDate(dates.value[1]).toFormat(timeFormat)}`)
  const startDate = computed<string>(() => `${DateTime.fromJSDate(dates.value[0]).toFormat(dateFormat)}`)
  const endDate = computed<string>(() => `${DateTime.fromJSDate(dates.value[1]).toFormat(dateFormat)}`)

  const formatDateRange = computed<string>(() => `${startDate.value} - ${endDate.value}, ${startTime.value} - ${endTime.value}`)

  const restaurants = ref<Restaurant[]>([])
  const selectedRestaurantAndWarehouseIds = ref<String[]>([])
  const warehouses = ref<Warehouse[]>([])

  const selectedRestaurants = computed(() => {
    return restaurants.value.filter((restaurant) => {
      return selectedRestaurantAndWarehouseIds.value.includes(restaurant.id)
    })
  })

  const selectedWarehouses = computed(() => {
    return warehouses.value.filter((warehouse) => {
      return selectedRestaurantAndWarehouseIds.value.includes(warehouse.id)
    })
  })

  const restaurantAndWarehouseList = computed(() => {
    return [...restaurants.value, ...warehouses.value]
  })

  const addRestaurantToStore = (newBusiness: Restaurant[]) => {
    restaurants.value = [...newBusiness]
  }

  const addWarehouseStore = (newWarehouse: Warehouse[]) => {
    warehouses.value = [...newWarehouse]
  }

  const initializeSelectedSetting = () => {
    selectedRestaurantAndWarehouseIds.value = restaurantAndWarehouseList.value.map(data => data.id)
  }

  return {
    restaurants,
    warehouses,
    startTime,
    endTime,
    startDate,
    endDate,
    dates,
    formatDateRange,
    selectedRestaurantAndWarehouseIds,
    selectedRestaurants,
    selectedWarehouses,
    restaurantAndWarehouseList,
    addRestaurantToStore,
    addWarehouseStore,
    initializeSelectedSetting
  }
})
