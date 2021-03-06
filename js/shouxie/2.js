/**
 * 面试编程题 写一个函数
 * 传统的面向对象语言 实例
 * dog Object实例出来，原型链
 * dog.__proto__ -> == b.prototype  b是a的原型对象
 * dog.__proto__.__proto__.__proto__ -> null b是a原型链上对象  原型链的终点是null
 * instanceof 传统语言中判断的是a是b的实例
 * js 中instanceof 运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置
 * @func instanceof 实现
 * @params a 实现   b 对象
 * @return boolean
 */
function Cat() {}
function Dog() {
    // 构造函数
}
// 原型
Dog.prototype.sayHi = function () {};

function myInstanceof(a, b) {
    // 原型
    let proto = Object.getPrototypeOf(a);
    console.log(proto);
    let prototype = b.prototype;
    // console.log(proto == a.__proto__); // true
    // if(proto == b.prototype)return true;
    // return false;
    while (true) {
        if (!proto) return false; // null 到头了
        if (proto == prototype) return true; // while 退出?
        proto = Object.getPrototypeOf(proto); // null
    }
}

const dog = new Dog();
console.log(myInstanceof(dog, Dog)); // true
console.log(myInstanceof(dog, Object)); // true
console.log(myInstanceof(dog, Cat));
