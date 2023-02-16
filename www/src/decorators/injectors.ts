import { ServicesCore } from "../core";

export function Injectable(name?: string) {
    return (target: any) => {
        ServicesCore.register(target, name);
    };
}

export function Inject(targetOrName: any): PropertyDecorator {
    return (target: Object, key: string | symbol) => {

        const service = ServicesCore.find(targetOrName);
        if (!service) throw new Error(`Service ${targetOrName} not found`);

        return Object.defineProperty(target, key, { 
            value: service.state, 
            configurable: true,
            writable: false
        })
    };
}
