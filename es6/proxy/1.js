let obj = { // 被代理的对象
    age: 18,
};
// get set 处理集合
obj.age; // get  Logger
obj.age = 'ssss'; // set 赋值的同时，监听，介入一下
// p 代理
let p = new Proxy(target,handler);
