// 类：设置存取器
// tsc 06.ts --target es5 typescript 默认转化为ES3，可通过--target设置转化的版本
class Employee {
    private _name: string // 私有属性一般以_开头命名
    get name():string {
        return this._name
    }
    set name(newName: string) {
        this._name = newName
        console.log(this._name)
    }
}

const employee = new Employee()
employee.name = 'john'