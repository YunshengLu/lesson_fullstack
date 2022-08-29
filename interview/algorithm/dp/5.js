/*
 * @Description: 硬币问题
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-29 16:50:50
 * @LastEditTime: 2022-08-29 17:05:18
 */
const coinChange = function (coins, amount) {
    // 用于保存每一个目标总额对应的最小硬币个数
    const f = [];
    // 提前定义已知情况
    f[0] = 0; // 底部
    // 迭代 [1, amount] 这个区间的硬币总额
    for (let i = 1; i <= amount; i++) {
        f[i] = Infinity;
        // 循环硬币每个可用硬币的面额
        for (let j = 0; j < coins.length; j++) {
            // 可以凑成
            if (i - coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i - coins[j]] + 1);
            }
        }
    }
    if (f[amount] === Infinity) {
        return -1;
    }
    return f[amount]; // 最值
};

console.log(coinChange([1, 2, 5], 11));
