// es6 reset运算符
function sayHi(...args) {
    console.log(args);
    // 函数里有this， arguments
    // console.log(arguments);
    // this 指向
    // 严格模式 this 没什么 undefined
    // 宿主环境     window || global
    // 手动绑定this
    console.log('Hello', this.name);
}

let a = {
    name: 'a',
};

// sayHi也是对象
// call第一个参数 指定this，其余参数，交给函数本身作为参数
// sayHi.call(a, 1, 2, 3); // 让普通函数 运行，但是指定this指向
sayHi.apply(a, [1, 2, 3]); // apply 传递一个数组
