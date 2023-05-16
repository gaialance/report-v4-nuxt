import { useQueryStore } from "~/stores/query"
import { Schema } from "~/types/report/schema"
import apiService,{ FetchConfig,FetchType } from "~/utils/axios"

export const getSchema = ():Promise<Schema[]> => {
    const config:FetchConfig = {
        fetchType: FetchType.Get,
        url:'/schemas'
    }
    return apiService.fetch<Schema[]>(config)
}