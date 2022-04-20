/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
    let m = rolls.length;
    let sum = mean * (m + n);
    let missSum = sum - rolls.reduce((pv, v) => pv + v);
    if (missSum < n || missSum > n * 6) {
        return [];
    }
    let a = ~~(missSum / n);
    let b = missSum % n;
    let arr = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        arr[i] = a + (i < b ? 1 : 0);
    }
    return arr;
};

console.log(missingRolls([3, 2, 4, 3], 4, 2));
