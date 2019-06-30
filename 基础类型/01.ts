// 基础类型
// boolean
let isDone: boolean = true
// number
let decliteral: number = 20 // 十进制
let hexcliteral: number = 0x14 // 十六进制
let binaryliteral: number = 0b10100 // 二进制
let actalliteral: number =  0o24 // 八进制
// string
let name: string = 'bob'
// array
// 01
let list: number[] = [1, 2, 3] // 所有item都是数字类型
// 02
let list1: Array<number> = [1, 2, 3]
//元组
let temp: [string, number] // 长度为2.第一个为string,第二个为number、】
temp = ['111', 10]
// 越界元素为联合类型，可以是string或者number
temp[3] = '11'
// console.log(temp[6].toString)
