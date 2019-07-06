// 联合类型

function add(value: any) {
    if (typeof value === 'number') {
        return value + 1
    }
    if (typeof value === 'string') {
        return value + ' '
    }
    throw new Error('value 的类型不是 string 或者 number')
}

add(1)
add('123')
add(true) // 并不能进行类型检测

// 使用联合类型解决
function add1(value: number | string) {
    if (typeof value === 'number') {
        return value + 1
    }
    if (typeof value === 'string') {
        return value + ' '
    }
    throw new Error('value 的类型不是 string 或者 number')
}

add1(1)
add1('123')
//add1(true) // 报错