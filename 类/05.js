// 只读属性readonly
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var xm = new Person('小明');
var nameString = xm.name;
console.log(nameString);
// xm.name = 'xi' 报错：readonly为只读属性，不能修改
