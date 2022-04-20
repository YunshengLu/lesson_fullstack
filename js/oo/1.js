// 传统的面向对象
// 类是对象的属性和方法模板
// class Dog{
//     constructor(type,color) {
//         this.type = type;
//         this.color = color;
//     }
//     makeSound() {
//         console.log('汪汪汪');
//     }
//     eat() {
//         console.log('骨头');
//     }
// }

// js 原型式的面向对象
// 构造函数
function Dog(type, color) {
    this.type = type;
    this.color = color;
    // this.makeSound = function() {}
}

// 任何函数都有一个prototype对象  方法
// Dog.prototype.makeSound = function() {
//     console.log('汪汪汪');
// }

// Dog.prototype.eat = function() {
//     console.log('骨头');
// }

Dog.prototype = {
    makeSound: function () {
        console.log(`${this.type} 汪汪汪`);
    },

    eat: function () {
        console.log('骨头');
    }
};
// 构造函数(属性)  原型对象(方法)   实例
// 1.把构造函数运行了一下
// 2.以 new的方式运行 this指向dog这个对象
const dog = new Dog('土狗', '灰色');
const cai = new Dog('菜狗', '绿色');
console.log(dog.type);
console.log(dog instanceof Dog);
console.log(dog.__proto__.constructor);
// 私有属性
// 任何一个实例对象都有一个__proto__ 指向构造函数的prototype对象
console.log(dog.__proto__);
// dog 和 Dog.prototype有点关系
// dog 构造器有没有相应的属性，可以去原型对象(prototype)对象上查找
// dog.prototype.makeSound();
dog.makeSound();

console.log(dog.constructor === cai.constructor);
