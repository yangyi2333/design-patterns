// Factory Pattern

interface IProduct {
    name: string
}
class ConcreteProduct implements IProduct {
    name = ''
}

class ProductA extends ConcreteProduct {
    constructor () {
        super()
        this.name = 'Product A'
    }
}

class ProductB extends ConcreteProduct {
    constructor () {
        super()
        this.name = 'Product B'
    }
}

class ProductC extends ConcreteProduct {
    constructor () {
        super()
        this.name = 'Product C'
    }
}

class Creator {
    static create(type: string): IProduct {
        if(type === 'a') {
            return new ProductA()
        }
        if(type === 'b') {
            return new ProductA()
        }
        return new ProductC()
    }
}

const PRODUCT = Creator.create('a')
console.log(PRODUCT.name)