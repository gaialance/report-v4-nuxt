import { FetchConfig, FetchType } from "~/plugins/axios.client"
import { useQueryStore } from "~/stores/queries"
import { Restaurant, Warehouse } from "~/types/business";
import { Schema } from "~/types/schema"

interface RestaurantRaw {
    _id: string;
    profile: RestaurantRawProfile
}
  
interface RestaurantRawProfile {
    name: string;
}

const convertToRestaurant = (data: RestaurantRaw): Restaurant => {
return {
    id: data._id,
    name: data.profile.name,
}
}
  
export const getRestaurantOptions = async (): Promise<Restaurant[]> => {
    const { businessId } = useQueryStore();
    const config: FetchConfig = {
        fetchType: FetchType.Get,
        url: `/${businessId}/restaurants`
    };
    const restaurants = (await useNuxtApp().$apiService<RestaurantRaw[]>(config)).map(data => {
        return convertToRestaurant(data);
    });
    return restaurants;
}
  
export const getWareHouseOptions = (): Promise<Warehouse[]> => {
    const { businessId } = useQueryStore();
    const config: FetchConfig = {
        fetchType: FetchType.Get,
        url: `/${businessId}/warehouses`
    };
    return useNuxtApp().$apiService<Warehouse[]>(config);
}

export const getBusiness = ():Promise<Schema[]> => {

    const { businessId } = useQueryStore()

    const config:FetchConfig = {
        fetchType: FetchType.Get,
        url:`/${businessId}`
    }

    // use library from plugin
    return useNuxtApp().$apiService<Schema[]>(config)
}



