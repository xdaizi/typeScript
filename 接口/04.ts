// 函数类型的接口
// 表示两个参数都是string，返回值是boolean
interface SearchFunc {
    (source: string, subString: string): boolean
}

let myFunc: SearchFunc
myFunc = function(src: string, sub: string) {
    let res = src.search(sub)
    return res > -1
}