// 数组在leetcode 题目  两数之和
// 数组相关，算法？排序(冒泡 两重for，插入排序)，二分算法(有效的提升效率)，动态规划

// 冒泡  暴力双循环 淳朴  i j  nums

// 1. 基本思路？两层循环
// 2. 反思？
    // 算法超时？O(n^2)  直觉？ 用空间(廉价)换时间(值钱)，把它优化成一层循环
// [] O(1) {} key:val O(1)
nums = [2, 5, 5, 11];
const target = 9;
let obj = {};
for (let i = 0; i < nums.length; i++) {
    // nums[i] 2 5 5 11  停下来？
    // target num[i] + obj  val = target
    // 差的算法
    // target - num[i]  -> obj 里面 -> 2 key?
    // 下标  i
    
}
