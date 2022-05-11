function add(a, b, c) {
    // arguments.length
    return a + b + c;
}
// 三个参数每次只能给一个怎么办？
// add(1)(2)(3);
// let result = add(1,2,3);
// 函数的柯里化
/**
 *
 * @param {function} fn
 * @return function
 */
function curry(fn) {
    // 函数嵌套函数,内部函数会被返回到外部,并得以执行
    // 闭包空间中
    // let a = 1;
    // 慢慢的收集拿到的参数?
    // fn等在闭包空间里的永生变量在被闭包函数声明时已经存在
    // 申明时
    let judge = (...args) => {
        if(args.length == fn.length) return fn(...args);
        return (...arg) => judge(...args,...arg);
    }
    return judge;
    // return (args) => {
    //     // 函数运行时可以访问到申明时的变量
    //     // fn?
    // };
}

// console.log(add.length);
// 得到被闭包的函数
let addCurry = curry(add); // 返回值 函数
// 执行函数
addCurry(1)(2)(3); // 一次接收一个参数，......，直到接收到的参数等于add需要的参数数量，执行，并返回结果
