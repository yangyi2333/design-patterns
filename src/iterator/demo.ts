// iterator pattern

interface IIterator {
  // return next object in the collection
  next: () => IAggregate;

  // return Boolean whether at end of collection
  hasNext: () => Boolean;
}

interface IAggregate {
  method: () => void;
}

class ConcreteIterator implements IIterator {
  private index: number;
  private data: IAggregate[];
  constructor (data: IAggregate[]) {
    this.index = 0;
    this.data = data;
  }
  
  next() {
    if(this.hasNext()) {
      return this.data[this.index++]
    }
    throw new Error('At end')
  }
  hasNext() {
    return this.index < this.data.length 
  }
}

class Aggregate implements IAggregate {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
  method() {
    console.log(this.id)
  }
}