/* 面试题 01.05. 一次编辑
字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
示例 1:

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/one-away-lcci/
 */
/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */

/* 
思路:因为该题字符串只有一处不同(增删改一个字符),所以只需顺序遍历比对两字符串,找出不一致的字符的位置
    再逆序遍历比对找出不一样字符的位置比对两次找到的位置是否一致,一致则只需要一次(或者零次)编辑 
*/
var oneEditAway = function (first, second) {
    if (first === second) return true;
    if (first.length < second.length) {
        [first, second] = [second, first];
    }
    let fl = first.length;
    let sl = second.length;
    if (fl - sl <= 1) {
        // 顺序遍历,找出不一样的字符的位置
        for (let i = 0; i < fl; i++) {
            if (first[i] !== second[i]) { // 找到不一样字符的位置
                let a = fl - 1;
                let b = sl - 1;
                // 逆序遍历,找出不一样字符的位置
                while (first[a] === second[b] && a > i) {
                    a--;
                    b--;
                }
                return i === a; // 如果两个位置一致返回true
            }
        }
    }
    return false;
};
