// 类的基本示例
var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.name = '123'; // 私有属性，只有在类中才能访问
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        return 'hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('word');
greeter.greet();
console.log(greeter.greeting);
// console.log(greeter.name) 报错：name为类的私有属性
