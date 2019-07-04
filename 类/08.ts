// 抽象类
// abstract: 定义抽象类，一般作为其他类的基类，不能通过new 来创造实例
abstract class Department {
    name: string
    constructor(name: string) {
        this.name = name
    }
    printName(): void {
        console.log('部门是' + this.name)
    }
    // 定义抽象方法，子类中具体实现
    abstract printMeeting(): void
}

class AccDepartment extends Department {
    constructor() {
        super('AccDepartment')
    }
    printMeeting(): void {
        console.log('每天10点开会')
    }
    printReport(): void {
        console.log('生成报告')
    }
}

// let acc = new Department()
// let acc: Department
let acc: AccDepartment
acc = new AccDepartment()

acc.printName()
acc.printMeeting()
acc.printReport()