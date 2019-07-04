// 类的静态成员
// 访问静态成员 Grid.属性名
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1);
var grid2 = new Grid(5);
console.log(grid1.calculateDistanceFromOrigin({ x: 4, y: 3 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 4, y: 3 }));
// console.log(grid1.origin)
Grid.origin.x = 5;
console.log(Grid.origin.x);
