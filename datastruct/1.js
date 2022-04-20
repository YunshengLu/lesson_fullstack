// 立即执行函数
// 1. 匿名函数
// 2. 我们也没有把他赋值给其他变量
// 3. 直接执行，立即执行函数
// 函数 this -> 运行环境 作用域 作用域链概念
(function () {
    // console.log('立即执行');
    let a = 1;
    let ret = 0;
    let res = 0;
    // 执行栈 js运行
    // 将add 函数入栈
    // 运行add 函数，得到返回值，并修改ret值
    ret = add(3, 5);
    // 执行流程回到了 匿名函数中
    // 栈的出栈操作
    ret = a + ret;
})();
//匿名函数的出栈操作 执行栈回归全局
// 全局栈 出栈， 代码运行结束

let num = 2;
function add(x, y) {
    let sum = 0;
    sum = x + y;
    return sum;
}
