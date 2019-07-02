// 混合类型
interface Counter {
    (start: number): string // 是个函数

    interval: number // 具有interval属性

    reset(): void // 具有reset属性，reset是个函数无返回值
}

function getCounter(): Counter {
    let counter = (function(star: number){
        return ''
    }) as Counter
    counter.interval = 1
    counter.reset = function() {

    }
    return counter
}
let c = getCounter()
c(10)
c.interval = 2
c.reset()