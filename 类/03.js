var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " \u79FB\u52A8\u4E86 " + distance + " \u7C73");
    };
    return Animal;
}());
// 1.在constructor，通过super()调用父类的构造器，且要在最前面
// 2.复写父类的move方法，通过super.move()调用父类的move
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function () {
        console.log('蛇形走');
        _super.prototype.move.call(this, 10);
    };
    return Snake;
}(Animal));
var Hrose = /** @class */ (function (_super) {
    __extends(Hrose, _super);
    function Hrose(name) {
        return _super.call(this, name) || this;
    }
    Hrose.prototype.move = function () {
        console.log('马形走');
        _super.prototype.move.call(this, 40);
    };
    return Hrose;
}(Animal));
var snake = new Snake('jimy');
var hrose = new Hrose('tom');
snake.move();
hrose.move();
