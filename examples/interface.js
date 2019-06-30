function hello(user) {
    return 'hello ' + user.firstName + user.lastMame;
}
var people = {
    firstName: 'Li',
    lastMame: 'hua'
};
console.log(hello(people));
