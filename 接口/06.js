function getCounter() {
    var counter = (function (star) {
        return '';
    });
    counter.interval = 1;
    counter.reset = function () {
    };
    return counter;
}
var c = getCounter();
c(10);
c.interval = 2;
c.reset();
