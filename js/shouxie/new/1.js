// 血缘 extends
function objectFactory() {
    // new
    // Person 普通函数运行一下 apply(p?)
    let obj = {}; // 没有血缘关系 原型式面向对象
    // 伪数组 把shift 方法借给arguments用
    var Constructor = [].shift.call(arguments);
    // console.log(arguments,'-----------');
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret || obj : obj;
    // return ret ? ret : obj;
    // return obj // 实例
}

function Person(name, age) {
    // 编程风格，遵守
    this.name = name;
    this.age = age;
    // return 1;
    return null; // 忽略
    // return {
    //     name,
    //     age,
    //     bb: '11',
    // };
}

// const p = new person('小明',18);
// console.log(p.name);
let p = objectFactory(Person, '小明', 18); // 引用式赋值
console.log(p.bb);
