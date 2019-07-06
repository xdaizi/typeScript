// 函数的重载

function pickCard(x:number): string
function pickCard(x:number[]): {type: string,default:[]}
// 通过以上函数的重载检查传入参数的类型

function pickCard(x:any): any {
    if(typeof x === 'number') {
        return '这是数字类型'
    } else if(Array.isArray(x)) {
        return {
            type: 'Array',
            default: []
        }
    }
}

let card1 = pickCard(1)
let card2 = pickCard([1])
// let card3 = pickCard('1') // 函数没有实现为string的重载，但是没有提示报错
console.log(card1)
console.log(card2)
// console.log(card3)