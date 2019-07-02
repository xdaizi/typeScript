// 可选属性
interface Square {
    color: string,
    area: number
}

// ?表示可选属性
interface SquareConfig {
    color?: string,
    width?: number
}

// :Square 表示函数的返回值是符合Square接口的类型
function makeSquare(config: SquareConfig) :Square {
    let newSquare = {color: 'red', area: 100}
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let sqConfig = {width: 40}
console.log(makeSquare(sqConfig))