// 类
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastMame = lastName;
        this.fullName = firstName + lastName;
    }
    return User;
}());
function hello(user) {
    return 'hello ' + user.firstName + user.lastMame;
}
var pe = new User('Li', 'hua');
console.log(hello(pe));
