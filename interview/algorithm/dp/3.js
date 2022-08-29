/*
 * @Description: 爬楼梯
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-29 11:45:58
 * @LastEditTime: 2022-08-29 11:58:25
 */
/**
 * @name: 动态规划爬楼梯
 * @msg:
 * @param {number} n
 * @return {number}
 */
const climbStaris = function (n) {
    // 动态规划
    // 1. 自底向上
    // 2. 已经搞过递归，状态树总结出来了状态转义方程
    const f = [];
    f[1] = 1;
    f[2] = 2;
    // 迭代 1 2 3 4 5..... 回溯
    // f[3] = f[2] + f[1];
    // f[4] = f[3] + f[2];
    // ......
    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 2] + f[i - 1]; // 状态转义方程
    }
    return f[n];
};

console.log(climbStaris(10));
