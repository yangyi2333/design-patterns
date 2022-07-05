// Singleton Pattern

class Singleton {
    private constructor() {};
    private static instance: Singleton;

    static getInstance(): Singleton {
        if(!this.instance){
            this.instance = new Singleton()
        }
        return this.instance
    }
}

const OBJECT1 = Singleton.getInstance()
const OBJECT2 = Singleton.getInstance()

console.log(OBJECT1 === OBJECT2)