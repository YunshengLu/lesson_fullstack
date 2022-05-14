/* 给你由 n 个小写字母字符串组成的数组 strs，其中每个字符串长度相等。

这些字符串可以每个一行，排成一个网格。例如，strs = ["abc", "bce", "cae"] 可以排列为：

abc
bce
cae
你需要找出并删除 不是按字典序升序排列的 列。在上面的例子（下标从 0 开始）中，列 0（'a', 'b', 'c'）和列 2（'c', 'e', 'e'）都是按升序排列的，而列 1（'b', 'c', 'a'）不是，所以要删除列 1 。

返回你需要删除的列数。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/delete-columns-to-make-sorted
*/

/**
 * @param {string[]} strs
 * @return {number}
 */
/* var minDeletionSize = function (strs) {
    var num = 0;
    var list = [];
    for (var i = 0; i < strs[0].length; i++) {
        for (var j = 0; j < strs.length; j++) {
            list.push(strs[j][i]);
        }
        var [...new_list] = list;
        if (new_list.toString() != list.sort().toString()) {
            num++;
        }
        var list = [];
    }
    return num;
}; */

/* var minDeletionSize = function (strs) {
    let n = strs.length;
    let m = strs[0].length;
    let num = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (strs[j][i] > strs[j + 1][i]) {
                num++;
                break;
            }
        }
    }
    return num;
}; */

var minDeletionSize = function (strs) {
    if (!strs.length) return 0;
    let t = 0;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] < strs[j - 1][i]) {
                t++;
                break;
            }
        }
    }
    return t;
};

/*
首先去除异常
双层循环对比，第一层循环所有列，第二层循环所有行
判断每一行跟上一行的相同列的大小，如果有比上一行小的，结束这次行循环，结果 + 1，继续下次列循环，直到结束
 */
