import axios from 'axios'
import { useQueryStore } from '~/stores/query'

const config = useRuntimeConfig()

// create generate axios apiService to call
const apiService = axios.create({
    // Api Configuration
    baseURL: config.public.apiBase,
    method:"get",
    timeout:6000
})

const queryStore = useQueryStore()

// Add request interceptor
apiService.interceptors.request.use( (config) => {
    
    config.headers.Authorization = `Bearer ${queryStore.token}`

    return config
})

export default apiService