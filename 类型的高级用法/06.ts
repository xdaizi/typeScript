// 字符串字面量类型，通过type关键字声明
type Easiing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement {
    animate(easiing: Easiing) {
        if (easiing === 'ease-in') {

        } else if (easiing === 'ease-in-out') {

        } else if (easiing === 'ease-out' ) {

        } else {}
    }
}

let box = new UIElement()
box.animate('ease-out')
// box.animate('ease') 报错，不属于Easiing类型
// box.animate(null)

