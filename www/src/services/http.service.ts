import { HttpEvent, HttpOptions, HttpResponse } from "react-inekz";
import { Observable } from "rxjs";
import { Injectable } from "../decorators";

@Injectable()
export class HttpService {
    /**
     * AJAX request with `GET` method, returns an `Observable` with the response.
     * @param url {String} - The url to make the request to
     * @param config HttpOptions - The configuration for the request
     * @returns {Observable<T | HttpResponse<T> | HttpEvent<T>>} - The response from the request
     */
    public get<T = any>(url: string, config?: HttpOptions): Observable<T | HttpResponse<T> | HttpEvent<T>> {
        let xhr = new XMLHttpRequest();
        url = this.setUrl(url, config?.params);

        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr = this.setHeaders(xhr, config?.headers);
        xhr.responseType = config?.responseType || "json";
        xhr.withCredentials = config?.withCredentials || false;

        const $response = new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
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
        });

        xhr.send();

        return $response;
    }
    /**
     * AJAX request with `POST` method, returns an `Observable` with the response.
     * @param url {string} - The url to make the request to
     * @param body {any} - The body of the request
     * @param config {HttpOptions} - The configuration for the request
     * @returns {Observable<T | HttpResponse<T> | HttpEvent<T>>} - The response from the request
     */
    public post<T = any>(url: string, body: any, config?: HttpOptions): Observable<T | HttpResponse<T> | HttpEvent<T>> {
        let xhr = new XMLHttpRequest();
        url = this.setUrl(url, config?.params);

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr = this.setHeaders(xhr, config?.headers);
        xhr.responseType = config?.responseType || "json";
        xhr.withCredentials = config?.withCredentials || false;

        const $response = new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
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
        });

        xhr.send(JSON.stringify(body));

        return $response;
    }
    /**
     * AJAX request with `PUT` method, returns an `Observable` with the response.
     * @param url {string} - The url to make the request to
     * @param config {HttpOptions} - The configuration for the request
     * @returns {Observable<T | HttpResponse<T> | HttpEvent<T>>} - The response from the request
     */
    public put<T = any>(url: string, body: any, config?: HttpOptions): Observable<T | HttpResponse<T> | HttpEvent<T>> {
        let xhr = new XMLHttpRequest();
        url = this.setUrl(url, config?.params);

        xhr.open("PUT", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr = this.setHeaders(xhr, config?.headers);
        xhr.responseType = config?.responseType || "json";
        xhr.withCredentials = config?.withCredentials || false;

        const $response = new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
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
        });

        xhr.send(JSON.stringify(body));

        return $response;
    }
    /**
     * AJAX request with `DELETE` method, returns an `Observable` with the response.
     * @param url {string} - The url to make the request to
     * @param config {HttpOptions} - The configuration for the request
     * @returns {Observable<T | HttpResponse<T> | HttpEvent<T>>} - The response from the request
     */
    public delete<T = any>(url: string, config?: HttpOptions): Observable<T | HttpResponse<T> | HttpEvent<T>> {
        let xhr = new XMLHttpRequest();
        url = this.setUrl(url, config?.params);

        xhr.open("DELETE", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr = this.setHeaders(xhr, config?.headers);
        xhr.responseType = config?.responseType || "json";
        xhr.withCredentials = config?.withCredentials || false;

        const $response = new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
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
        });

        xhr.send();

        return $response;
    }
    /**
     * AJAX request with `PATCH` method, returns an `Observable` with the response.
     * @param url {string} - The url to make the request to
     * @param body {any} - The body of the request
     * @param config {HttpOptions} - The configuration for the request
     * @returns {Observable<T | HttpResponse<T> | HttpEvent<T>>} - The response from the request
     */
    public patch<T = any>(
        url: string,
        body: any,
        config?: HttpOptions
    ): Observable<T | HttpResponse<T> | HttpEvent<T>> {
        let xhr = new XMLHttpRequest();
        url = this.setUrl(url, config?.params);

        xhr.open("PATCH", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr = this.setHeaders(xhr, config?.headers);
        xhr.responseType = config?.responseType || "json";
        xhr.withCredentials = config?.withCredentials || false;

        const $response = new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
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
        });

        xhr.send(JSON.stringify(body));

        return $response;
    }
    /**
     * AJAX request with `HEAD` method, returns an `Observable` with the response.
     * @param url {string} - The url to make the request to
     * @param config {HttpOptions} - The configuration for the request
     * @returns {Observable<T | HttpResponse<T> | HttpEvent<T>>} - The response from the request
     */
    public head<T = any>(url: string, config?: HttpOptions): Observable<T | HttpResponse<T> | HttpEvent<T>> {
        let xhr = new XMLHttpRequest();
        url = this.setUrl(url, config?.params);

        xhr.open("HEAD", url, true);

        xhr = this.setHeaders(xhr, config?.headers);
        xhr.responseType = config?.responseType || "json";
        xhr.withCredentials = config?.withCredentials || false;

        const $response = new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
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
        });

        xhr.send();

        return $response;
    }
    /**
     * AJAX request with `OPTIONS` method, returns an `Observable` with the response.
     * @param url {string} - The url to make the request to
     * @param config {HttpOptions} - The configuration for the request
     * @returns {Observable<T | HttpResponse<T> | HttpEvent<T>>} - The response from the request
     */
    public options<T = any>(url: string, config?: HttpOptions): Observable<T | HttpResponse<T> | HttpEvent<T>> {
        let xhr = new XMLHttpRequest();
        url = this.setUrl(url, config?.params);

        xhr.open("OPTIONS", url, true);

        xhr = this.setHeaders(xhr, config?.headers);
        xhr.responseType = config?.responseType || "json";
        xhr.withCredentials = config?.withCredentials || false;

        const $response = new Observable<T | HttpResponse<T> | HttpEvent<T>>((observer) => {
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
        });

        xhr.send();

        return $response;
    }
    /**
     * Returns a URL with the parameters entered in the `params` option
     * @param url {string} - The url to make the request to
     * @param configParams {object} - The configuration for the request
     * @returns {string} - The url with the params
     */
    private setUrl(url: string, configParams?: { [key: string]: string | string[] }): string {
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
    /**
     * Returns the XHR with the headers parameters added in the configuration.
     * @param xhr {XMLHttpRequest} - The XMLHttpRequest object
     * @param configHeaders {object} - The configuration for the request
     * @returns {XMLHttpRequest} - The XMLHttpRequest object with the headers
     */
    private setHeaders(xhr: XMLHttpRequest, configHeaders?: { [key: string]: string | string[] }): XMLHttpRequest {
        if (configHeaders) {
            Object.keys(configHeaders).forEach((key) => {
                let value = configHeaders[key];
                if (!Array.isArray(value)) value = [value];
                value.forEach((v) => xhr.setRequestHeader(key, v));
            });
        }

        return xhr;
    };
    /**
     * Returns a response type based on the `observe`
     * @param xhr {XMLHttpRequest} - The XMLHttpRequest object
     * @param observe {"body" | "events" | "response"} - The configuration for the request
     * @returns {T | HttpResponse<T> | HttpEvent<T>} - The response from the request
     */
    private next<T = any>(
        xhr: XMLHttpRequest,
        observe?: "body" | "events" | "response"
    ): T | HttpResponse<T> | HttpEvent<T> {
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
    /**
     * Returns an error type of the response based on `observe`
     * @param xhr {XMLHttpRequest} - The XMLHttpRequest object
     * @param observe {"body" | "events" | "response"} - The configuration for the request
     * @returns {T | HttpResponse<T> | HttpEvent<T>} - The response from the request
     */
    private error<T = any>(
        xhr: XMLHttpRequest,
        observe?: "body" | "events" | "response"
    ): T | HttpResponse<T> | HttpEvent<T> {
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
    /**
     * Returns the percentage of progress based on the `observe`
     * @param percent {number} - The percentage of the progress
     * @param observe {"body" | "events" | "response"} - The configuration for the request
     * @returns {T | HttpResponse<T> | HttpEvent<T>}
     */
    private progress<T = any>(
        percent: any,
        observe?: "body" | "events" | "response"
    ): T | HttpResponse<T> | HttpEvent<T> {
        if (observe === "events") {
            return { type: "in-progress", percent, response: null } as HttpEvent<T>;
        }

        return percent as T;
    }
}
