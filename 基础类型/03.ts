// any类型
let notSure: any = 4
notSure = '111'
notSure = true
let list: any[] = [1, '2']
// void --- 表示没有任何类型
// 函数不返回值
function sarn(): void {
    console.log('this is my wraning')
}
// null - undefined
let a:null = null
let b:undefined = undefined
// 任何子类型可以赋值给父类型（null，undefined是任意类型的子类型）
a = undefined
b = null
let c: number = 3
c = null