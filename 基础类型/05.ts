// 类型断言
let someValue: any = 'this is book'
someValue.length
// 强制转化 --- 类型断言
// let strLength: number = (<string>someValue).length
let strLength: number = (someValue as string).length