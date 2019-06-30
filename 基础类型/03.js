// any类型
var notSure = 4;
notSure = '111';
notSure = true;
var list = [1, '2'];
// void --- 表示没有任何类型
// 函数不返回值
function sarn() {
    console.log('this is my wraning');
}
// null - undefined
var a = null;
var b = undefined;
// 任何子类型可以赋值给父类型（null，undefined是任意类型的子类型）
a = undefined;
b = null;
var c = 3;
c = null;
