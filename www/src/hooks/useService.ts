import { ServicesCore } from "../core";

/**
 * Hook that allows the client to retrieve the state of an injected service.
 * @param service
 * @returns
 */
export function useService(TargetOrName: any) {
    let service = ServicesCore.find(TargetOrName);
    if (!service) throw new Error(`Service ${TargetOrName} not found`);
    return service.state
}
