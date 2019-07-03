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
// 类：private私有属性，protected受保护属性
// private:只能在当前类中访问， 外部不允许访问
// protected：可以在当前类及子类中访问， 外部不允许访问
var Person = /** @class */ (function () {
    function Person(age) {
        this.age = age;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        var _this = _super.call(this, age) || this;
        _this.name = name;
        return _this;
    }
    Student.prototype.hello = function () {
        return "\u5927\u5BB6\u597D\uFF0C\u6211\u662F" + this.name + ", \u4ECA\u5E74" + this.age;
    };
    return Student;
}(Person));
var xh = new Person(20);
// xh.age 报错：protected：可以在当前类及子类中访问， 外部不允许访问
var xm = new Student('小明', 12);
console.log(xm.hello());
// xm.name 报错：private:只能在当前类中访问， 外部不允许访问
// xm.age 报错：protected：可以在当前类及子类中访问， 外部不允许访问
