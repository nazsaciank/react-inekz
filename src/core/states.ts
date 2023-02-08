class StatesCore {
    private states = new Map<string, any>()

    public register<T extends ObjectConstructor>(state: T) {
        const initialized = this.states.get(state.name)
        if (initialized) return initialized

        const initialState = new state()
        this.states.set(state.name, initialState)

        return initialState
    }

    public find<T extends object>(state: T) {
        const Service = state.constructor
        return this.states.get(Service.name)
    }
}

const States = new StatesCore()

export default States
