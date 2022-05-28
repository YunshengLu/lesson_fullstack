/*
560. 和为 K 的子数组
给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

示例 1：
输入：nums = [1,1,1], k = 2
输出：2

示例 2：
输入：nums = [1,2,3], k = 3
输出：2
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/subarray-sum-equals-k/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* var subarraySum = function (nums, k) {
    const map = { 0: 1 };
    let prefixSum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if (map[prefixSum - k]) {
            count += map[prefixSum - k];
        }

        if (map[prefixSum]) {
            map[prefixSum]++;
        } else {
            map[prefixSum] = 1;
        }
    }
    return count;
};
 */

var subarraySum = function (nums, k) {
    const map = new Map();
    // 键：前缀和
    // 值：出现的次数
    map.set(0, 1);
    let count = 0;
    let prefixSum = 0;
    for (const num of nums) {
        // 前缀和
        prefixSum += num;
        // 如果之前出现过prefixSum- k的前缀和，累加到count
        count += map.get(prefixSum - k) || 0;
        // 存储当前前缀和出现的次数
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return count;
};
