// 创造泛型函数
function identit<T>(arg: T):T {
    return arg
}

// 通过字面量的方式创造泛型函数
let myIdentit: {<T>(arg: T):T} = identit

// 通过接口的方式创造泛型函数
interface Identit {
    <T>(arg: T):T
}

let myIdentit1: Identit = identit
myIdentit1([])

// 通过接口的方式灵活创造泛型函数
// 将类型变量提取作为参数传给接口，从而创造对应的泛型函数，推荐
interface Identit1<T> {
    (arg: T):T
}

let myIdentit2: Identit1<number> = identit
let myIdentit3: Identit1<string> = identit
myIdentit2(123)
myIdentit3('123')