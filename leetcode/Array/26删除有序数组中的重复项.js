/* 
26. 删除有序数组中的重复项
给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。

由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。

将最终结果插入 nums 的前 k 个位置后返回 k 。

不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-array/ 
*/

// 通过 重复元素个数确认 最近一次需要被替换的 因为是排序好的 所以可以直接减去中间重复的个数找到所求需替换位置值
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var removeDuplicates = function (nums) {
    var count = 0;
    var n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[i - count] = nums[i];
        } else {
            count++;
        }
    }
    return n - count;
}; */


// 快慢指针
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = nums.length;
    let count = 0;
    for (let i = 1; i < len; i++) {
        if (nums[i] !== nums[i - 1]) {
            count++;
            nums[count] = nums[i];
        }
    }
    return count + 1;
};
