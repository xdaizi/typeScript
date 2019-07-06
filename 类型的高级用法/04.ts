// 类型保护
// 1. parameterName is Type这种形式， parameterName必须是来自于当前函数签名里的一个参数名。
interface Dog {
    name: string
    break(): void
}

interface Cat {
    name: string
    sheep(): void
}

interface Animal {}

function create(): Dog | Cat  {
    return {} as Dog | Cat 
}

function isDag(target: Dog | Cat): target is Dog{
    return (target as Dog).break !== undefined
}

let a = create()

if (isDag(a)) {
    a.break()
} else {
    a.sheep()
}



// 2: typeof 的类型保护 === 或者 !== 才有类型保护

function add(value: number | string) {
    if (typeof value === 'number') {
        return value + 1
    }
    if (typeof value === 'string') {
        return value.length
    }
    throw new Error('value 的类型不是 string 或者 number')
}


// 3.instanceof类型保护 构造函数的类型保护

class Fish {
    swim() {
        console.log('水中游')
    }
}

class Brid {
    fly() {
        console.log('天上飞')
    }
}

function getRanDom(): Fish | Brid {
    return Math.random() > 0.5 ? new Fish() : new Brid()
}

let animal = getRanDom()

if (animal instanceof Fish) {
    animal.swim() 
}
if (animal instanceof Brid) {
    animal.fly()
}


