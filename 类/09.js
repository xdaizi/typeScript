// 类的其他用法
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return 'hello ' + this.greeting;
        }
        else {
            return Greeter.msg;
        }
    };
    Greeter.msg = 'hello word';
    return Greeter;
}());
var greeter = new Greeter('ts');
var greeter1 = new Greeter();
console.log(greeter.greet());
console.log(greeter1.greet());
// :Greeter 表示为Greeter的实例类型
// : typeof Greeter 表示为Greeter的类类型
var Greeter1 = Greeter;
Greeter1.msg = 'NBA';
var greeter2 = new Greeter1();
console.log(greeter2.greet());
console.log(greeter1.greet());
