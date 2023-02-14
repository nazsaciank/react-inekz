import { Observable } from "rxjs";
import { Injectable } from "../decorators";
import { HttpEvent, HttpOptions, HttpResponse } from "../interfaces/http";

@Injectable()
export class HttpService {
    public get<T = any>(url: string, config?: HttpOptions) {
        return new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
            let xhr = new XMLHttpRequest();
            url = this.setUrl(url, config?.params);

            xhr.open("GET", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr = this.setHeaders(xhr, config?.headers);
            if (config?.responseType) xhr.responseType = config.responseType;
            if (config?.withCredentials) xhr.withCredentials = config.withCredentials;

            if (config?.reportProgress) {
                xhr.onprogress = (e) => {
                    const percent = Math.round((e.loaded / e.total) * 100);
                    observer.next(this.progress(percent, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                };
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    observer.next(this.next(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                    observer.complete();
                    return;
                }
                observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
            };

            xhr.onerror = () => observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);

            xhr.send();
        });
    }

    public post<T = any>(url: string, body: any, config?: HttpOptions) {
        return new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
            let xhr = new XMLHttpRequest();
            url = this.setUrl(url, config?.params);

            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr = this.setHeaders(xhr, config?.headers);
            if (config?.responseType) xhr.responseType = config.responseType;
            if (config?.withCredentials) xhr.withCredentials = config.withCredentials;

            if (config?.reportProgress) {
                xhr.onprogress = (e) => {
                    const percent = Math.round((e.loaded / e.total) * 100);
                    observer.next(this.progress(percent, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                };
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    observer.next(this.next(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                    observer.complete();
                    return;
                }
                observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
            };

            xhr.onerror = () => observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);

            xhr.send(JSON.stringify(body));
        });
    }

    public put<T = any>(url: string, body: any, config?: HttpOptions) {
        return new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
            let xhr = new XMLHttpRequest();
            url = this.setUrl(url, config?.params);

            xhr.open("PUT", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr = this.setHeaders(xhr, config?.headers);
            if (config?.responseType) xhr.responseType = config.responseType;
            if (config?.withCredentials) xhr.withCredentials = config.withCredentials;

            if (config?.reportProgress) {
                xhr.onprogress = (e) => {
                    const percent = Math.round((e.loaded / e.total) * 100);
                    observer.next(this.progress(percent, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                };
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    observer.next(this.next(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                    observer.complete();
                    return;
                }
                observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
            };

            xhr.onerror = () => observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);

            xhr.send(JSON.stringify(body));
        });
    }

    public delete<T = any>(url: string, config?: HttpOptions) {
        return new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
            let xhr = new XMLHttpRequest();
            url = this.setUrl(url, config?.params);

            xhr.open("DELETE", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr = this.setHeaders(xhr, config?.headers);
            if (config?.responseType) xhr.responseType = config.responseType;
            if (config?.withCredentials) xhr.withCredentials = config.withCredentials;

            if (config?.reportProgress) {
                xhr.onprogress = (e) => {
                    const percent = Math.round((e.loaded / e.total) * 100);
                    observer.next(this.progress(percent, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                };
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    observer.next(this.next(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                    observer.complete();
                    return;
                }
                observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
            };

            xhr.onerror = () => observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);

            xhr.send();
        });
    }

    public patch<T = any>(url: string, body: any, config?: HttpOptions) {
        return new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
            let xhr = new XMLHttpRequest();
            url = this.setUrl(url, config?.params);
            
            xhr.open("PATCH", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr = this.setHeaders(xhr, config?.headers);
            if (config?.responseType) xhr.responseType = config.responseType;
            if (config?.withCredentials) xhr.withCredentials = config.withCredentials;

            if (config?.reportProgress) {
                xhr.onprogress = (e) => {
                    const percent = Math.round((e.loaded / e.total) * 100);
                    observer.next(this.progress(percent, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                };
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    observer.next(this.next(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                    observer.complete();
                    return;
                }
                observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
            };

            xhr.onerror = () => observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);

            xhr.send(JSON.stringify(body));
        });
    }

    public head<T = any>(url: string, config?: HttpOptions) {
        return new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
            let xhr = new XMLHttpRequest();
            url = this.setUrl(url, config?.params);

            xhr.open("HEAD", url, true);

            xhr = this.setHeaders(xhr, config?.headers);
            if (config?.responseType) xhr.responseType = config.responseType;
            if (config?.withCredentials) xhr.withCredentials = config.withCredentials;

            if (config?.reportProgress) {
                xhr.onprogress = (e) => {
                    const percent = Math.round((e.loaded / e.total) * 100);
                    observer.next(this.progress(percent, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                };
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    observer.next(this.next(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                    observer.complete();
                    return;
                }
                observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
            };

            xhr.onerror = () => observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);

            xhr.send();
        });
    }

    public options<T = any>(url: string, config?: HttpOptions) {
        return new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
            let xhr = new XMLHttpRequest();
            url = this.setUrl(url, config?.params);

            xhr.open("OPTIONS", url, true);
            
            xhr = this.setHeaders(xhr, config?.headers);
            if (config?.responseType) xhr.responseType = config.responseType;
            if (config?.withCredentials) xhr.withCredentials = config.withCredentials;

            if (config?.reportProgress) {
                xhr.onprogress = (e) => {
                    const percent = Math.round((e.loaded / e.total) * 100);
                    observer.next(this.progress(percent, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                };
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    observer.next(this.next(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
                    observer.complete();
                    return;
                }
                observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);
            };

            xhr.onerror = () => observer.error(this.error(xhr, config?.observe) as T | HttpResponse<T> | HttpEvent<T>);

            xhr.send();
        });
    }

    private setUrl(url: string, configParams?: { [key: string]: string | string[] }) {
        if (configParams) {
            const params = new URLSearchParams();
            Object.keys(configParams).forEach((key) => {
                let value = configParams[key];
                if (!Array.isArray(value)) value = [value];
                value.forEach((v) => params.append(key, v));
            });
            url = `${url}?${params.toString()}`;
        }
        return url;
    }

    private setHeaders = (xhr: XMLHttpRequest, configHeaders?: { [key: string]: string | string[] }) => {
        if (configHeaders) {
            Object.keys(configHeaders).forEach((key) => {
                let value = configHeaders[key];
                if (!Array.isArray(value)) value = [value];
                value.forEach((v) => xhr.setRequestHeader(key, v));
            });
        }

        return xhr;
    };

    private next<T = any>(xhr: XMLHttpRequest, observe?: "body" | "events" | "response") {
        if (observe === "events") {
            return { type: "done", percent: 100, response: xhr.response } as HttpEvent<T>;
        }

        if (observe === "body") {
            return {
                url: xhr.responseURL,
                status: xhr.status,
                headers: xhr.getAllResponseHeaders(),
                body: xhr.response as T,
            } as HttpResponse<T>;
        }

        return xhr.response as T;
    }

    private error<T = any>(xhr: XMLHttpRequest, observe?: "body" | "events" | "response") {
        if (observe === "events") {
            return { type: "failed", percent: 0, response: xhr.response } as HttpEvent<T>;
        }

        if (observe === "body") {
            return {
                url: xhr.responseURL,
                status: xhr.status,
                headers: xhr.getAllResponseHeaders(),
                body: xhr.response as T,
            } as HttpResponse<T>;
        }

        return xhr.response;
    }

    private progress<T = any>(percent: any, observe?: "body" | "events" | "response") {
        if (observe === "events") {
            return { type: "in-progress", percent, response: null } as HttpEvent<T>;
        }

        return percent as T;
    }
}
