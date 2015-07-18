var myModule = (function () {
    var exports = {};

    exports.getSumOfMultiples = function (upToNumber) {
        var sum = 0;
        for (var i = 1; i < upToNumber; i++) {
            if (!(i%3)|| !(i%5)) sum = sum + i;
        }
        return sum;
    };
    return exports;
}());

console.log(myModule.getSumOfMultiples(1000));

