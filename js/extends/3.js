function Animal() { // 父类
    this.species = '动物';
}
Animal.prototype.sayHi = function(){
    console.log('sayHi');
}
// extends class 用不了的，手写
function Cat(name, color) {
    // 具有spacies属性就可以
    // this
    // Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}

function Cat(name, color) {
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}

// prototype模式
// let ani = new Animal();
Cat.prototype = new Animal(); // 原型对象 Cat 继承到 Animal spacies属性

let cat = new Cat('---','---');
// console.log(cat.species,cat.sayHi());
// console.log(Cat.prototype.constructor);