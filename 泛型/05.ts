// 泛型中使用类类型
// 实现工厂函数
class DogKeeper {
    hasMask: boolean
}

class CatKeeper {
    useArg: string
}

class Animal {
    numLength: number
}

class Dog extends Animal {
    keeper: DogKeeper
}

class Cat extends Animal {
    keeper: CatKeeper
}

// 通过函数创造泛型类
function createInstance<T extends Animal>(C: new() => T): T {
    return new C()
}
let dog = createInstance(Dog)
let cat = createInstance(Cat)

dog.keeper.hasMask
cat.keeper.useArg
