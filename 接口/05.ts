// 索引签名
// 表示索引为number类型，值是string类型
interface StringArray {
    [index: number]: string
}
let myArray: StringArray
myArray = ['小明', '小花']
let myStr = myArray[0]

// 索引可以是number或者是string，但是number索引的返回值必须是string缩影的子类型

class Animal {
    name: string
}

class Dog extends Animal {
    breed: string
}
// 报错 ：number索引的返回值必须是string缩影的子类型
// interface NotOkay {
//     [index: number]: Animal
//     [item: string]: Dog
// }
interface NotOkay {
    [index: number]: Dog
    [item: string]: Animal
}


// 通过索引签名定义接口的属性的类型
interface NumberDictionary {
    [index: string]: number // string类型的key的值必须为number类型
    length: number
    // name: string 报错
}

// 只读的索引类型
interface ReadonlyStringArray {
    // number类型的索引签名的属性为只读的
    readonly [index: number]: string
}

let strArr: ReadonlyStringArray = ['1', '2', '3']
// strArr[0] = '5'报错：索引签名只允许读取