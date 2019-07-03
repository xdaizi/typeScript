// 继承
class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    move(distance: number = 0) {
        console.log(`${this.name} 移动了 ${distance} 米`)
    }
}

// 1.在constructor，通过super()调用父类的构造器，且要在最前面
// 2.复写父类的move方法，通过super.move()调用父类的move
class Snake extends Animal{
    constructor(name: string) {
        super(name)
    }
    move() {
        console.log('蛇形走')
        super.move(10)
    }
}

class Hrose extends Animal{
    constructor(name: string) {
        super(name)
    }
    move() {
        console.log('马形走')
        super.move(40)
    }
}

const snake = new Snake('jimy')
const hrose = new Hrose('tom')

snake.move()
hrose.move()