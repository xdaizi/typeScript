// 类的基本示例
class Greeter {
    greeting: string
    private name: string = '123' // 私有属性，只有在类中才能访问
    constructor(msg: string) {
        this.greeting = msg
    }
    greet() {
        return 'hello, ' + this.greeting
    }
}

let greeter = new Greeter('word')
greeter.greet()
console.log(greeter.greeting)
// console.log(greeter.name) 报错：name为类的私有属性