// 类
class User {
    firstName: string
    lastMame: string
    fullName: string
    constructor (firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastMame = lastName
        this.fullName = firstName + lastName
    }
}
interface Person {
    firstName: string,
    lastMame: string
}
function hello(user: Person) {
    return 'hello ' + user.firstName + user.lastMame
}
let pe = new User('Li', 'hua')
console.log(hello(pe))