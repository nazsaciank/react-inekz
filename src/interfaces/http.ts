export interface HttpOptions {
    headers?: { [key: string]: string | string[] };
    params?: { [key: string]: string | string[] };
    reportProgress?: boolean;
    observe?: "body" | "events" | "response";
    responseType?: XMLHttpRequestResponseType;
    withCredentials?: boolean;
}

export interface HttpEvent<T = any> {
    type: "in-progress" | "done" | "failed";
    percent?: number;
    response: T | null;
}

export interface HttpResponse<T> {
    url: string;
    status: number;
    headers: string;
    body: T;
}
