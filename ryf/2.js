// 面向对象OOP的首要任务是封装，属性和方法，成为实例们的模板
// 猫 name color
// js 对象与其他语言不一样，对象字面量
// 猫 模板
let  Cat = {
    name: '',
    color: '',
};
// js本没有类，不需要，{}
// 实例
let tom = {
    name: 'Tom',
    color: 'black',
}

let cafei = {
    name: '加菲',
    color: 'brown',
}
// 缺点
    // 1. 写起来麻烦，没有构造函数，可以把实例化属性的过程封装一下
    // 2. 实例与原型，没有任何联系

