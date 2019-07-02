// 接口继承类 -- 接口会继承类的私有属性,即state
class Control {
    // private 申明私有属性
    private state: any
    color: string
}

interface SelectControl extends Control {
    select()
}

class Box extends Control implements SelectControl {
    select(){}
}

class TextBox extends Control {
    select(){}
}

// ImageBox缺少state属性
class ImageBox implements SelectControl {
    select(){}
}