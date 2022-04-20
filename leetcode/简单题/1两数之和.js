/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力双循环
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         let k = nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] == target - k) {
//                 return [i, j];
//             }
//         }
//     }
// };

// 用空间换时间
var twoSum = function (nums, target) {
    const map = {};   // 存储出现过的数字，和对应的索引  
    for (let i = 0; i < nums.length; i++) {
        const j = target - nums[i];
        if (j in map) {
            return [map[j], i];   // 如果存在，直接返回 [目标元素的索引,当前索引]
        }
        map[nums[i]] = i;// 如果不存在，说明之前没出现过目标元素, 存入当前的元素和对应的索引
    }
};

console.log(twoSum([2, 5, 5, 11], 10));

