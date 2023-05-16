import { FetchConfig, FetchType } from "~/plugins/axios.client"
import { useQueryStore } from "~/stores/query"
import { Report } from "~/types/report"

export const getReport = ():Promise<Report[]> => {

    const { businessId } = useQueryStore()

    if ( businessId ) {
        const config:FetchConfig = {
            fetchType: FetchType.Get,
            url:`/reportV4/${businessId}`
        }
        return useNuxtApp().$apiService<Report[]>(config)
    }else{
        return Promise.reject("Business Id is not defined")
    }
}