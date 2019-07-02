// 只读属性
// readonly表示只读
interface Point {
    readonly x: number
    readonly y: number
}

let template: Point = {x:10, y:20}
// template.x = 30 报错：因为x是只读属性

// 泛型只读数组
let a: number[] = [1, 2, 3, 4]
let ra: ReadonlyArray<number> = a
// ra[1] = 3 报错：只读不能修改其元素
// ra.push(5) 报错：不存在push方法
// a = ra 报错：类型不匹配
a = ra as number[] // 可以：通过as断言ra的类型，从而类型匹配