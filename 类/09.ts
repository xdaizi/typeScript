// 类的其他用法
class Greeter {
    static msg = 'hello word'
    greeting: string
    constructor(message?: string) {
        this.greeting = message
    }
    greet() {
        if(this.greeting) {
            return 'hello ' + this.greeting
        } else {
            return Greeter.msg
        }
    }
}

let greeter = new Greeter('ts')
let greeter1 = new Greeter()
console.log(greeter.greet())
console.log(greeter1.greet())

// :Greeter 表示为Greeter的实例类型
// : typeof Greeter 表示为Greeter的类类型
let Greeter1: typeof Greeter = Greeter
Greeter1.msg = 'NBA' // 修改静态属性会使Greeter一起变，因为是应用数据类型
let greeter2 = new Greeter1()
console.log(greeter2.greet())
console.log(greeter1.greet())


// 接口可以继承类
// 但如果没有类的特征，一般用接口不用类
// class Point {
//     x: number
//     y: number
// }

interface Point {
    x: number
    y: number
}

interface Point1 extends Point {
    z: number
}

let temp: Point1 = {
    x: 1,
    y: 2,
    z: 4
}