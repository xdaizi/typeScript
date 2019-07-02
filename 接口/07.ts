// 继承
interface Animate {
    name: string
}

interface Doag extends Animate {
    color: string
}
let dog: Doag
dog.name = '小黄'
dog.color = 'red'