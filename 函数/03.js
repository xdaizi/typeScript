// this
var Hero = /** @class */ (function () {
    function Hero() {
        this.name = '瑞文';
        this.skill = '击飞';
    }
    Hero.prototype.getInfo = function () {
        return function () {
            return {
                name: this.name,
                skill: this.skill
            };
        };
    };
    return Hero;
}());
var hero = new Hero();
var getInfo = hero.getInfo();
console.log(getInfo()); // this 指向window
// 通过箭头函数解决
var Hero1 = /** @class */ (function () {
    function Hero1() {
        this.name = '瑞文';
        this.skill = '击飞';
    }
    Hero1.prototype.getInfo = function () {
        var _this = this;
        return function () {
            return {
                name: _this.name,
                skill: _this.skill
            };
        };
    };
    return Hero1;
}());
var hero1 = new Hero1();
var getInfo1 = hero1.getInfo();
console.log(getInfo1()); // this 指向hero1
// 通过显示的声明this参数解决
var Hero2 = /** @class */ (function () {
    function Hero2() {
        this.name = '瑞文';
        this.skill = '击飞';
    }
    Hero2.prototype.getInfo = function () {
        var _this = this;
        return function () {
            return {
                name: _this.name,
                skill: _this.skill
            };
        };
    };
    return Hero2;
}());
var hero2 = new Hero2();
var getInfo2 = hero2.getInfo();
console.log(getInfo2()); // this 指向hero1
