// 联合类型与交叉类型的区别
// 交叉类型：表示多个类型的集合，可以访问每个类型的属性
// 联合类型： 表示多个属性之一，只能访问类型共有的属性

interface Dog {
    name: string
    break(): void
}

interface Cat {
    name: string
    sheep(): void
}

function create1(): Dog | Cat  {
    return {} as Dog | Cat 
}

function create2(): Dog & Cat  {
    return {} as Dog & Cat 
}

let a = create1()
a.name
// a.sheep: 报错，联合类型只能访问类型共有的属性 
let b = create2()
// 交叉雷翔可以访问每个类型的属性
b.name
b.break
b.sheep
