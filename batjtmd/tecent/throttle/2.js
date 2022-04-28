// call(thisObj,param1,param2...)
// 手写 call 方法
// 函数关键字
Function.prototype.call2 = function ( ...args) {
    // console.log('call2',thisObj, args);
    let thisObj = args[0]?args[0]:null;
    console.log(args.slice(1));
    // args.shift();
    // console.log(args);
    // let arr = 
};

let a = {
    name: 'a',
};

function func() {}
// call 第一个参数，等下是函数里的this
// 余下的参数交给call2 继续过日子
func.call2(a, 1, 2);
// func.call(a);
console.log(func.__proto__);
console.log(func instanceof Function); // true
console.log(Function);
