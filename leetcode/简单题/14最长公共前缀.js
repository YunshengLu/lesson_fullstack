/* 14. 最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-common-prefix/ */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let len = strs.length,
        result,
        nowLength;
    if (!len) return ''; // 判断数组是否为空，为空直接返回
    result = strs[0]; // 最长公共前缀初始化为第一个字符串

    for (let i = 1; i < len; i++) {
        let k = 0; // 当前遍历到的下标，即将公共前缀长度初始化为0
        nowLength = result.length;
        // 直到遍历到第一个不是公共前缀的位置
        while (k < nowLength && strs[i][k] === result[k]) {
            k++;
        }
        result = result.slice(0, k);
    }

    return result;
};

/* 
## 横向扫描
    - 初始化最长公共前缀 result 的值为数组第一个字符串
    - 遍历后面的字符串，依次将其与 result 进行比较，两两找出公共前缀，遇到字符不同则结束遍历
    - 通过 k 记录当前遍历到的相同下标，然后直接重新赋值 result = result.slice(0, k)
    - 时间复杂度：O(mn)，其中 m 是字符串数组中的字符串的平均长度，n 是字符串的数量。
    最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。
## 边界条件
    - 当字符串数组长度为 0 时则公共前缀为空，直接返回
    - 时间上的优化，通过 nowLength = result.length 存储当前记录的公共前缀长度，
    后面 while 循环时就可以用这个存储的变量作为边界条件约束 k 
 */
