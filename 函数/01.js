// 1.可选参数：用arg？表示可选参数可选参数必须放在必选参数后面
// 2.默认参数：给参数默认值，当没有传递时或者传的时undefind时取默认参数
function getName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'will'; }
    var nameString = lastName ? firstName + ' ' + lastName : firstName;
    return nameString;
}
console.log(getName()); // 默认参数：不传取默认值, 可选参数可以不传
console.log(getName('KOBE')); // 可选参数可以不传
console.log(getName(undefined, 'brandy')); //默认参数:传undefind取默认参数 传递可选参数
console.log(getName(null, 'brandy')); //默认参数:传undefind取默认参数 传递可选参数
console.log(getName('KOBE', 'brandy')); // 传递可选参数
