function myCalculator(init) { // constructor
    const that = this; // 实例 this丢失问题 that 依然指向实例
    that.num = init || 0;
    myCalculator.prototype.plus = function(num) {
        that.num += +num;
        return myCalculator.prototype
    }
    myCalculator.prototype.minus = function(num) {
        that.num -= +num;
        return myCalculator.prototype
    }
    myCalculator.prototype.times = function(num) {
        that.num *= +num;
        return myCalculator.prototype
    }
    myCalculator.prototype.dividedBy = function(num) {
        that.num /= +num;
        return myCalculator.prototype
    }
    myCalculator.prototype.equals = function(num) {
        return that.num
    }
    return myCalculator.prototype
}

console.log(myCalculator(1)
    .plus(1)
    .minus(2)
    .equals())