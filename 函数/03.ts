// this
class Hero {
    name: string = '瑞文'
    skill: string = '击飞'
    getInfo () {
        return function () {
            return {
                name: this.name,
                skill: this.skill
            }
        }
    }
}

let hero = new Hero()
let getInfo = hero.getInfo()
console.log(getInfo())// this 指向window


// 通过箭头函数解决
class Hero1 {
    name: string = '瑞文'
    skill: string = '击飞'
    getInfo () {
        return () => {
            return {
                name: this.name,
                skill: this.skill
            }
        }
    }
}

let hero1 = new Hero1()
let getInfo1 = hero1.getInfo()
console.log(getInfo1())// this 指向hero1


// 通过显示的声明this参数解决
class Hero2 {
    name: string = '瑞文'
    skill: string = '击飞'
    getInfo (this: Hero2) {
        return () => {
            return {
                name: this.name,
                skill: this.skill
            }
        }
    }
}

let hero2 = new Hero2()
let getInfo2 = hero2.getInfo()
console.log(getInfo2())// this 指向hero1