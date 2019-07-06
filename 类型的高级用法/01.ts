// 交叉类型
// 交叉类型：将两个类型拼接在一起
function extend<T, U>(obj1: T, obj2: U):T & U {
    let res = {} as T & U
    for(let i in obj1) {
        res[i] = obj1[i] as any
    }
    for(let i in obj2) {
        res[i] = obj2[i] as any
    }
    return res
}

class Person {
    constructor(public name:string) {

    }
}

interface LogAble {
    log(): void
}

class ConsoleLogger implements LogAble {
    log() {
        
    }
}

let person = new Person('john')
let conLog = new ConsoleLogger()

let obj = extend(person, conLog)
obj.name
obj.log()
