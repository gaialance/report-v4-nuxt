import { Restaurant, Warehouse } from "~/types/business";
import { useQueryStore } from "./queries";

const storeKey: string = 'business-store';

export const useBusinessStore = defineStore(storeKey, () => {
    const restaurantConfig = ref<Restaurant[]>([])
    const warehouseConfig = ref<Warehouse[]>([])

    const queryStore = useQueryStore()

    const { businessId } = queryStore

    const addRestaurantToStore = ( newBusiness: Restaurant[] ) => {
        restaurantConfig.value = [ ...restaurantConfig.value , ...newBusiness ]
    }

    const addWarehouseStore = ( newWarehouse: Warehouse[] ) => {
        warehouseConfig.value = [...warehouseConfig.value, ...newWarehouse]
    }

    const initializeBusinessConfig = async () =>{
        if ( businessId == '' ){
            return Promise.reject('Invalid Business ID')
        }else{
            
        }
    }

});