// console.log(Symbol('1') == Symbol('1'))
// var sy = sb = Symbol('a');
// console.log(sy == sb);
// 函数嵌套函数
var PClass = (function () {
    // 私有
    const a = Symbol('a'); // 唯一
    const m = Symbol('m'); // 唯一
    function P() {
        // this.a
        this[a] = 'a这是私有变量';
        this.b = '变量B 公有属性';
        this[m] = function () {
            console.log('---------');
        };
    }
    P.prototype = {
        getA() {
            console.log(this[a]);
            this[m]();
        },
    };
    return P;
})();

//   访问不到  a m    不可能值和a 相同？
// const c = 12121
const pc = new PClass();
console.log(pc.b);
console.log(pc.a);
pc.getA();
