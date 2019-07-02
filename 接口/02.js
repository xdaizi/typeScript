// :Square 表示函数的返回值是符合Square接口的类型
function makeSquare(config) {
    var newSquare = { color: 'red', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var sqConfig = { width: 40 };
console.log(makeSquare(sqConfig));
