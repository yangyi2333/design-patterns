// observer pattern
interface IObserver {
  notify(...args: unknown[]):void
}

interface IObservable {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notify(...args: unknown[]):void
}

class Subject implements IObservable {
  private observers: Set<IObserver>;
  constructor() {
      this.observers = new Set();
  }

  subscribe(observer: IObserver) {
    this.observers.add(observer);
  }

  unsubscribe(observer: IObserver) {
    this.observers.delete(observer);
  }

  notify(...args: unknown[]) {
    this.observers.forEach(observer => {
      observer.notify(...args)
    })
  }
}

class Observer1 implements IObserver {
  notify(...args: unknown[]) {
    console.log(`Observer1 received ${args}`)
  }
}

const SUBJECT = new Subject();
const OBSERVER1 = new Observer1();
SUBJECT.subscribe(OBSERVER1);

SUBJECT.notify('MSG',[1,2,3])
