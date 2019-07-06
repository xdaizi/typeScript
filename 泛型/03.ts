// 泛型类
// 通过类型变量
// 只有实例部分的类型可以使用泛型类型，静态属性不可以
class TypeArr<T> {
    value: T
    // static _value: T
    add: (x: T, y: T) => T
}
// 使用时声明为数字类型
let numberArr = new TypeArr<number>()
// numberArr.value = ''
numberArr.value = 123

// 使用时声明为string类型
let stringArr = new TypeArr<string>()
// stringArr.value = 123
stringArr.value = '123'
stringArr.add = function(x, y) {
    return x+ y
}
// stringArr.add(1, '123')
stringArr.add('hello', '123')