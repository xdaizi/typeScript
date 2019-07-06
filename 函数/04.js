// 函数的重载
function pickCard(x) {
    if (typeof x === 'number') {
        return '这是数字类型';
    }
    else if (Array.isArray(x)) {
        return {
            type: 'Array',
            "default": []
        };
    }
}
var card1 = pickCard(1);
var card2 = pickCard([1]);
var card3 = pickCard('1'); // 函数没有实现为string的重载，但是没有提示报错
console.log(card1);
console.log(card2);
console.log(card3);
