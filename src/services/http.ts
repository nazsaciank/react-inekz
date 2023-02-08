import { Injectable } from '../decorators'
import axios, { AxiosRequestConfig } from 'axios'

@Injectable()
export class HttpService {
    public get<Res = any>(url: string, config?: AxiosRequestConfig) {
        return axios.get<any, Res>(url, config)
    }

    public post<Res = any>(url: string, data: any, config?: AxiosRequestConfig) {
        return axios.post<any, Res>(url, data, config)
    }

    public put<Res = any>(url: string, data?: any, config?: AxiosRequestConfig) {
        return axios.put<any, Res>(url, data, config)
    }

    public delete<Res = any>(url: string, config?: AxiosRequestConfig) {
        return axios.delete<any, Res>(url, config)
    }

    public patch<Res = any>(url: string, data?: any, config?: AxiosRequestConfig) {
        return axios.patch<any, Res>(url, data, config)
    }
}
