// 继承
class Animal {
    move(distance: number = 0) {
        console.log(`Animal move ${distance}米`)
    }
}

// extends: 继承,从而拥有父类的属性及方法
class Dog extends Animal {
    brak() {
        console.log('旺旺')
    }
}
const dog = new Dog()
dog.brak()
dog.move(10)