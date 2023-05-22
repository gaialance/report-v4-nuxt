import { FetchConfig, FetchType } from "~/plugins/axios.client"
import { useQueryStore } from "~/stores/queries"
import { Report } from "~/types/report"

// This Page get all the report list

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