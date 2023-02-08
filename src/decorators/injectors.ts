import { States } from '../core'

export function Injectable() {
    return (target: any) => {
        const initilized = States.register(target)
        return initilized
    }
}

export function Inject(Service: any) {
    return (target: any, key: string) => {
        let initilized = States.find(Service)
        if (!initilized) initilized = States.register(Service)
        target[key] = initilized
        return target
    }
}
