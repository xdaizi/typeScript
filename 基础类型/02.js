// 枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// 获取枚举值
var c = Color.Red;
console.log(111, c);
// 通过直反查属性名
var colorName = Color[3];
console.log(2222, colorName);
