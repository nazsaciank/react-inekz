import { Injectable } from '../decorators'
import axios, { AxiosRequestConfig } from 'axios'
import { Observable } from 'rxjs'

@Injectable()
export class HttpService {
    public get<Res = any>(url: string, config?: AxiosRequestConfig) {
        return new Observable<Res>((observer) => {
            axios
                .get(url, config)
                .then((response) => observer.next(response.data))
                .catch((error) => observer.error(error))
                .finally(() => observer.complete())
        })
    }

    public post<Res = any>(url: string, data: any, config?: AxiosRequestConfig) {
        return new Observable<Res>((observer) => {
            axios
                .post(url, data, config)
                .then((response) => observer.next(response.data))
                .catch((error) => observer.error(error))
                .finally(() => observer.complete())
        })
    }

    public put<Res = any>(url: string, data?: any, config?: AxiosRequestConfig) {
        return new Observable<Res>((observer) => {
            axios
                .put(url, data, config)
                .then((response) => observer.next(response.data))
                .catch((error) => observer.error(error))
                .finally(() => observer.complete())
        })
    }

    public delete<Res = any>(url: string, config?: AxiosRequestConfig) {
        return new Observable<Res>((observer) => {
            axios
                .delete(url, config)
                .then((response) => observer.next(response.data))
                .catch((error) => observer.error(error))
                .finally(() => observer.complete())
        })
    }

    public patch<Res = any>(url: string, data?: any, config?: AxiosRequestConfig) {
        return new Observable<Res>((observer) => {
            axios
                .patch(url, data, config)
                .then((response) => observer.next(response.data))
                .catch((error) => observer.error(error))
                .finally(() => observer.complete())
        })
    }
}
