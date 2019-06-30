// never类型 -- 不存在的数据类型,是任何类型的子类型,但没有子类型
// 函数没有返回值
function error(msg) {
    throw new Error(msg);
}
// 无线循环函数
function inifiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
