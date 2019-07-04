// 类的静态成员
// 访问静态成员 Grid.属性名
class Grid {
    static origin = {x: 0, y: 0}
    scale: number
    constructor(scale: number) {
        this.scale = scale
    }
    calculateDistanceFromOrigin(point: {x: number, y: number}) {
        let xDist = point.x - Grid.origin.x
        let yDist = point.y - Grid.origin.y
        return Math.sqrt(xDist*xDist + yDist * yDist) * this.scale
    }
}

let grid1 = new Grid(1)
let grid2 = new Grid(5)
console.log(grid1.calculateDistanceFromOrigin({x: 4, y: 3}))
console.log(grid2.calculateDistanceFromOrigin({x: 4, y: 3}))
// console.log(grid1.origin)
Grid.origin.x = 5
console.log(Grid.origin.x)