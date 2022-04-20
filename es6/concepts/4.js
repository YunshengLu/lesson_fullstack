// 'use strict';
// 当我们是箭头函数的时候，普通函数调用
// this有新方案
// 箭头函数没有this，通过作用域链查找到外部的this
let b = 1;
const func = () => {
    // console.log(this,'----------');
    // return a;
};

// func(1);

let c = new func(); // func is not a constructor
