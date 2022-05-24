/* 
4. 寻找两个正序数组的中位数
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。

示例 1：
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

来源：力扣（LeetCode）
链接https://leetcode.cn/problems/median-of-two-sorted-arrays/submissions/
  */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // 合并数组
    const arr = [...nums1, ...nums2];
    // 如果数组只有一位 直接返回该数字
    if (arr.length <= 1) return arr[0];
    // 把数组按照正序排序
    arr.sort((a, b) => {
        return a - b;
    });
    // 数组长度
    const len = arr.length;
    // 判断数组长度奇还是偶
    // 奇数返回
    if (len % 2 !== 0) return arr[(len - 1) / 2];
    // 偶数处理 截取中间的俩个数字
    const oArr = arr.slice(len / 2 - 1, len / 2 + 1);
    // 取均值
    return (oArr[0] + oArr[1]) / 2;
};
