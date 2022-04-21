// class es6 语法糖 相当于构造函数
// class Animal {
//     // constructor每个类都有,没写会默认添加
//     constructor(params) {
//         // 实例属性,实例可以访问到的属性
//         this.params = params;
//     }
//     // 实例方法,定义在Animal的原型上,通过实例调用
//     sayHi() {
//         console.log('sayHi');
//     }
//     // 静态方法,定义在构造函数上,只能构造函数调用,这里指类本身
//     static sayNo() {
//         console.log('sayNo');
//     }
// }

function Animal(params) {
    // 实例属性
    this.params = params;
    // 静态属性
    // Animal.Color = 'black';
}
Animal.prototype = {
    // 实例方法,定义在Animal的原型上,通过实例调用
    sayHi:function(){
        console.log('sayHi');
    },
    sayNo:function(){
        console.log('sayNo');
    }
}
 // 静态方法,定义在构造函数上,只能构造函数调用
 Animal.sayNo = function(){
     console.log('sayNo');
 }

let animal = new Animal();
animal.sayHi(); // sayHi 实例方法
// Animal.sayHi(); // TypeError: Animal.sayHi is not a function
console.log(Animal.prototype); // class:{} 构造函数:{ sayHi: [Function: sayHi], sayNo: [Function: sayNo] }
console.log(animal.__proto__); // { sayHi: [Function: sayHi], sayNo: [Function: sayNo] }
console.log(Animal.prototype.__proto__); // [Object: null prototype] {}
console.log(animal.__proto__.__proto__); // [Object: null prototype] {}
Animal.prototype.sayHi(); // sayHi
// animal.sayNo(); // TypeError: animal.sayNo is not a function
Animal.sayNo(); // sayNo 静态方法

Animal.Color = 'black';
console.log(Animal.Color); // black
