// 只读属性readonly
class Person {
    readonly name: string
    constructor(name: string) {
        this.name = name
    }
}
const xm = new Person('小明')
let nameString = xm.name
console.log(nameString)
// xm.name = 'xi' 报错：readonly为只读属性，不能修改