import { action, observable } from "mobx"

class A {
    b = new B()
}

class B {
    c = new C()
}

class C {
    @observable nr = 0;

    @action inc() {
        this.nr++;
    }
}

export class MyStorePlain {
    @observable plainObject = { b: { c: { nr: 0 } } };

    @action inc() {
        this.plainObject.b.c.nr++;
    }
}

export class MyStoreClass {
    @observable classObject = new A();

    @action inc() {
        this.classObject.b.c.inc();
    }
}