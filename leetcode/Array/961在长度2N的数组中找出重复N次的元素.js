/* 
961. 在长度 2N 的数组中找出重复 N 次的元素
给你一个整数数组 nums ，该数组具有以下属性：

nums.length == 2 * n.
nums 包含 n + 1 个 不同的 元素
nums 中恰有一个元素重复 n 次
找出并返回重复了 n 次的那个元素。

示例 1：

输入：nums = [1,2,3,3]
输出：3

示例 2：

输入：nums = [2,1,2,5,3,2]
输出：2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    return nums.find(item => nums.indexOf(item) !== nums.lastIndexOf(item));
};

// 因为nums 中包含了n + 1 个不同的数，而数组长度是2n，恰有一个元素重复 n 次
// 所以除了那个重复了n次的数以外的数都只出现了一次，只要判断数的第一个下标和最后一个下标是否一样就可以找出那个数
