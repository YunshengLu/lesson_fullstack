/*
 * @Description: 爬楼梯
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-29 11:18:52
 * @LastEditTime: 2022-08-29 11:42:46
 */
/**
 * @name: 非递归爬楼梯
 * @msg:
 * @param {number} n
 * @return {number}
 */
// 用空间换时间 n 缓存
// f[n-2] = value
const f = [];
const climbStaris = function (n) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    if (f[n] === undefined) f[n] = climbStaris(n - 1) + climbStaris(n - 2);
    return f[n];
};

console.log(climbStaris(10));
