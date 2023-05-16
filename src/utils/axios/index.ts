import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useQueryStore } from '~/stores/query'

// get the from nuxt.config.ts
const config = useRuntimeConfig()

const baseURL = config.public.apiBase

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

class Request {
  instance: AxiosInstance;
  baseConfig: AxiosRequestConfig = {
    baseURL: baseURL,
    timeout: 6000,
  };
  
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config));
    this.instance.interceptors.request.use((config) => {
      const { token } = useQueryStore();
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    }, (err) => {
      return Promise.reject(err);
    });
    this.instance.interceptors.response.use((response) => {

      return response;
    }, (err) => {
      return Promise.reject(err);
    });
  }

  public async fetchResponse<T>(config: FetchConfig): Promise<AxiosResponse<T>> {
    const { fetchType, url, requestConfig, data } = config;
    switch (fetchType) {
      case FetchType.Get:
        return this.instance.get<T>(url, requestConfig)

      case FetchType.Post:
        return this.instance.post<T>(url, data, requestConfig);

      case FetchType.Put:
        return this.instance.put<T>(url, data, requestConfig);

      case FetchType.Delete:
        return this.instance.delete<T>(url, requestConfig);
    }
  }

  public async fetch<T>(config: FetchConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.fetchResponse<T>(config);
    return new Promise<T>((resolve) => resolve(response.data));
  }
}

export default new Request({});