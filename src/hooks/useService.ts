import { States } from "../core";

export function useService<T = any>(service: T) {
    const s = States.find(service as any);

    return s as T[keyof T];
}
