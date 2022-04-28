// 本身 内部暗流涌动
// 两个世界 函数[call] 构造函数[constructor]
// [call] 指向全局
// [constructor] this 实例 默认返回值
'use strict'; // 严格模式
function Dog(type) {
    console.log(this);
    this.type = type;
}

// 函数都有this，不管他以什么方式运行
// this 是一个指针， 和运行方式相关
Dog(); // 普通函数 this 与运行环境相关 node后端 global
let dog = new Dog(); // 这里 this 指向 这个实例化后的对象  作为构造函数
