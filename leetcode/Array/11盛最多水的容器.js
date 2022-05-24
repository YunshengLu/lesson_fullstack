/* 
11. 盛最多水的容器
给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
返回容器可以储存的最大水量。
说明：你不能倾斜容器。

示例 1：
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/container-with-most-water/
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0; // 容器左边下标
    let right = height.length - 1; // 容器右边下标
    let maxOpacity = 0; // 最终最大容积
    let res = 0; // 临时最大容积
    // 判断是否遍历完
    while (left < right) {
        height[right] > height[left]
            ? (res = height[left] * (right - left))
            : (res = height[right] * (right - left));
        // 判断哪边低，哪边低哪边移动
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
        maxOpacity > res ? maxOpacity : (maxOpacity = res);
    }
    return maxOpacity;
};


// 双指针和674. 最长连续递增序列很像
