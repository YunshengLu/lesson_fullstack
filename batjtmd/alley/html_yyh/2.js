// 函数
// 当函数名大写，构造函数
// js 里面函数就可以构造一个类
// js 早期没有class关键字
// 函数是一等对象,可以用来构造对对象
// js其实没有类
// 但并不影响它做java的面向对象编程
function Cat(name) {
    // 给一组对象添加属性
    this.name = name;
    // 内存开销 复杂的多 入栈,分配内存
    // this.makeSound=function(){
    //     console.log('喵喵喵');
    // }
}
// 是一个构造对象的函数
// 函数也是对象
// js 函数对象上有prototype属性
// 公有的方法放到prototype对象中
Cat.prototype.makeSound = function(){
    console.log('喵喵喵');
}

Cat.prototype.eat = function(){
    console.log('吃鱼');
}

Cat.sayHi = function(){
    console.log('Hello');
}
// 同一组对象 共同的类方法,属性模板
var xm = new Cat('小黑');
console.log(xm.name);
xm.makeSound();
// xm.sayHi(); // 不能调用

// var xh = new Cat('小花');
// console.log(xm == xh); // false
// // 判断两个对象是兄弟
// console.log(xm.constructor == xh.constructor); // true
// // 判断对象是某类的实例
// console.log(xm instanceof Cat);
// // Object即是对象又是函数
// // 函数是一等对象
// let  a = {}; // 对象字面量的构造函数Object()
// let obj = new Object(); // 对象字面量
// console.log(obj);
// console.log(typeof Object);

// 通过构造函数找方法
console.log(Cat.prototype);
// 通过实例找到构造函数
console.log(xm.constructor);