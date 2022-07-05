// strategy pattern

interface IStrategyConstructor {
    new (): IStrategy
}

class ObjectContext {
    //This is the object whose behavior will change

    request(strategy: IStrategyConstructor){
        return new strategy()
    }
}


interface IStrategy {
    method(): string
}

class strategyA implements IStrategy {
    // A concrete strategy subclass

    method(): string {
        return 'strategy A'
    }
}

class strategyB implements IStrategy {
    // A concrete strategy subclass

    method(): string {
        return 'strategy B'
    }
}
class strategyC implements IStrategy {
    // A concrete strategy subclass

    method(): string {
        return 'strategy C'
    }
}

const OBJECT_CONTEXT = new ObjectContext();

console.log(OBJECT_CONTEXT.request(strategyA).method())
console.log(OBJECT_CONTEXT.request(strategyB).method())
console.log(OBJECT_CONTEXT.request(strategyC).method())
