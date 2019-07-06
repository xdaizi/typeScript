// 类型推断

// 上下文类型推断
class Animal {

}
class Dog extends Animal {

}
class Cat extends Animal {

}

function getArray(): Animal[] {
    return [new Dog(), new Cat()]
}

// 明确声明类型
let animal = [new Dog(), new Cat()] // (Dog | Cat)[]

let animal1:Animal[] = [new Dog(), new Cat()] // Animal[]