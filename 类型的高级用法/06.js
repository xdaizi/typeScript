var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (easiing) {
        if (easiing === 'ease-in') {
        }
        else if (easiing === 'ease-in-out') {
        }
        else if (easiing === 'ease-out') {
        }
        else { }
    };
    return UIElement;
}());
var box = new UIElement();
box.animate('ease-out');
// box.animate('ease') 报错，不属于Easiing类型
// box.animate(null)
