/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
    // 用空间换时间
    const diffs = {};
    // 缓存数组长度
    const len = nums.length;
    // 遍历数组
    for (let i = 0; i < len; i++) {
        if (diffs[target-nums[i]] !== undefined){
            return [diffs[target-nums[i]],i]
        }else{
            diffs[nums[i]] = i;
        }
    }
}

console.log(twoSum([2, 5, 5, 11],10));