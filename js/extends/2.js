function Animal() { // 父类
    this.species = '动物';
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


