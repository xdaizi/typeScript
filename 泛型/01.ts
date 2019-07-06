// 泛型：支持多个类型，且不会类型丢失

// 比如我们要求传入的参数类型和返回的参数类型一致
// 使用any：不行，可以传入sting返回number
// function identit(arg: any):any {
//     return arg
// }

// 使用类型变量<T>
function identit<T>(arg: T):T {
    return arg
}

// 使用<>声明类型变量
identit<string>('123')
// 自动推断string
identit('123')


// 类型变量作为一部分使用
// 由于要有length属性，所以可以将T做为类型的一部分
// 传入的是类型为T的数组
function identitLen<T>(arg: T[]):T[] {
    console.log(arg.length)
    return arg
}