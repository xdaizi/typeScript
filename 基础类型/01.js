// 基础类型
// boolean
var isDone = true;
// number
var decliteral = 20; // 十进制
var hexcliteral = 0x14; // 十六进制
var binaryliteral = 20; // 二进制
var actalliteral = 20; // 八进制
// string
var name = 'bob';
// array
// 01
var list = [1, 2, 3]; // 所有item都是数字类型
// 02
var list1 = [1, 2, 3];
//元组
var temp; // 长度为2.第一个为string,第二个为number、】
temp = ['111', 10];
// 越界元素为联合类型，可以是string或者number
temp[3] = '11';
console.log(temp[6].toString());
