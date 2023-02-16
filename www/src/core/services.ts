interface iService {
    name: string;
    state: any;
}

class ServicesCore {
    private Services: iService[] = [];

    public register<T extends ObjectConstructor>(target: T, name?: string) {
        if (target instanceof Object) {
            const isRegistered = this.Services.find((s) => s.name === name || s.name === target.name);
            if (isRegistered) return;
            const initialState = new target();
            this.Services.push({ 
                name: name || target.name, 
                state: initialState
            });
        }
    }

    public find<T extends ObjectConstructor>(targetOrName: T | string) {
        for (const actual of this.Services) {
            if (typeof targetOrName === "string" && actual.name === targetOrName) return actual;
            if (typeof targetOrName === "function" && actual.state instanceof targetOrName) return actual;
        }
        return null;
    }
}

const Services = new ServicesCore();

export default Services;
