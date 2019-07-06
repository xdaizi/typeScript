// 剩余参数: ...arg[]
// resName:这里代表为字符串数组
function getName(firstName) {
    var resName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        resName[_i - 1] = arguments[_i];
    }
    var str = firstName;
    for (var i = 0; i < resName.length; i++) {
        str += ' ' + resName[i];
    }
    return str;
}
console.log(getName('kobe'));
console.log(getName('kobe', 'james'));
console.log(getName('kobe', 'james', 'lumb'));
console.log(getName('kobe', 'james', 'wade', 'lumb'));
