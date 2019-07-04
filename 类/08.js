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
// 抽象类
// abstract: 定义抽象类，一般作为其他类的基类，不能通过new 来创造实例
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('部门是' + this.name);
    };
    return Department;
}());
var AccDepartment = /** @class */ (function (_super) {
    __extends(AccDepartment, _super);
    function AccDepartment() {
        return _super.call(this, 'AccDepartment') || this;
    }
    AccDepartment.prototype.printMeeting = function () {
        console.log('每天10点开会');
    };
    AccDepartment.prototype.printReport = function () {
        console.log('生成报告');
    };
    return AccDepartment;
}(Department));
// let acc = new Department()
// let acc: Department
var acc;
acc = new AccDepartment();
acc.printName();
acc.printMeeting();
acc.printReport();
