/*
 * @Description: 爬楼梯
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-29 10:35:05
 * @LastEditTime: 2022-08-29 11:18:30
 */
// 具象 爬楼梯
// n 阶楼梯 每次可以爬1阶或2阶，有多少中方法可以爬到顶部
// - 递归
// 入栈
// 自顶向下 终局
// 30 ？ 29 + 28
// f(n) = f(n-1) + f(n-2)
/**
 * @name: 递归爬楼梯
 * @msg:
 * @param {number} n
 * @return {number}
 */
const climbStaris = function (n) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    return climbStaris(n - 1) + climbStaris(n - 2);
};

console.log(climbStaris(10));