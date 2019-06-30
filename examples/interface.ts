// 接口：定义类型
interface Person {
    firstName: string,
    lastMame: string
}
function hello(user: Person) {
    return 'hello ' + user.firstName + user.lastMame
}
let people = {
    firstName: 'Li',
    lastMame: 'hua'
}
console.log(hello(people))