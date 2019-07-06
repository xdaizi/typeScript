// 泛型约束，泛型变量可以继承接口等使其受到约束
interface LengthLimit {
    length: number
}

function Identity<T extends LengthLimit>(arg: T):T {
    console.log(arg.length)
    return arg
}
// Identity(123)
Identity('123')
Identity({length: 2, name:'obj'})

// 泛型约束：K 为 T的属性
function getProperty<T, k extends keyof T>(obj: T, k: k) {
    return obj[k]
}

let temp = {
    a: 1,
    b: '2'
}
getProperty(temp, 'a')
// getProperty(temp, 'c')

