// 类：private私有属性，protected受保护属性
// private:只能在当前类中访问， 外部不允许访问
// protected：可以在当前类及子类中访问， 外部不允许访问
class Person {
    protected age: number
    constructor(age: number) {
        this.age = age
    }
}

class Student extends Person {
    private name: string
    constructor(name: string, age: number) {
        super(age)
        this.name = name
    }
    hello() {
        return `大家好，我是${this.name}, 今年${this.age}`
    }
}

const xh = new Person(20)
// xh.age 报错：protected：可以在当前类及子类中访问， 外部不允许访问

const xm = new Student('小明', 12)
console.log(xm.hello())
// xm.name 报错：private:只能在当前类中访问， 外部不允许访问
// xm.age 报错：protected：可以在当前类及子类中访问， 外部不允许访问