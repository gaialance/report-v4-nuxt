import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useQueryStore } from '~/stores/queries'

export enum FetchType {
    Get,
    Post,
    Put,
    Delete,
  }
  
export interface FetchConfig {
    fetchType: FetchType;
    url: string;
    requestConfig?: AxiosRequestConfig,
    data?: Record<string, any>
}

export default defineNuxtPlugin(nuxtApp=>{
    const baseUrl = useRuntimeConfig().public.apiBase

    let apiService = axios.create({
        baseURL: baseUrl,
        timeout: 6000,
    })

    // add Authrorization token using interceptor
    apiService.interceptors.request.use((request)=>{
        const { token } = useQueryStore()

        if( token ) request.headers!.Authorization = `Bearer ${token}`

        return request
    }, (err) => {
        return Promise.reject(err)
    })

    // response
    apiService.interceptors.response.use((response)=>{
        return response
    }, (err) =>{
        return Promise.reject(err)
    })

    const fetchResponse = async <T>(config: FetchConfig): Promise<AxiosResponse<T>> => {
        const { fetchType, url, requestConfig, data } = config;
        switch (fetchType) {
        case FetchType.Get:
            return apiService.get<T>(url, requestConfig)

        case FetchType.Post:
            return apiService.post<T>(url, data, requestConfig);

        case FetchType.Put:
            return apiService.put<T>(url, data, requestConfig);

        case FetchType.Delete:
            return apiService.delete<T>(url, requestConfig);
        }
    }

    const fetch = async <T>(config: FetchConfig): Promise<T> => {
        const response: AxiosResponse<T> = await fetchResponse<T>(config);

        return new Promise<T>((resolve) => resolve(response.data))
    }

    return {
        provide:{
            apiService:fetch
        }
    }
})