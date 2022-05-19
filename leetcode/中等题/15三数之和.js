/* 
15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。 
示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/3sum/
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = []; // 保存符合条件的结果
    nums.sort((a, b) => a - b); // 数组排序

    let len = nums.length;
    for (let i = 0; i < len - 2; i++) {
        // 因为有三个数，所以只需要循环到nums.length - 2，若是-1 或length 就会超出数组范围或者start >= end
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let start = i + 1;
            let end = len - 1;
            while (start < end) {
                if (nums[i] + nums[start] + nums[end] === 0) {
                    result.push([nums[i], nums[start], nums[end]]); // 正确结果push到结果里
                    start++;
                    end--;
                    while (start < end && nums[start] === nums[start - 1]) { // 如果新的start等于他挪动之前的值那就继续挪动
                        start++;
                    }
                    while (start < end && nums[end] === nums[end + 1]) { // 同上
                        end--;
                    }
                } else if (nums[i] + nums[start] + nums[end] < 0) {
                    start++;
                } else {
                    end--;
                }
            }
        }
    }

    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4])); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
/* 
思路：
1. 先给数组排序
2. 遍历数组，从0遍历到length-2
3. 如果当前的数等于前一个数，则跳过这个数，去重
4. 如果数字不同，则start = i + 1,end = nums.length - 1,i start end 三数相加，若和比零大
    end--，若和比零小 start++，如果等于0，则将三个数放入result结果里
5. 返回结果
*/
