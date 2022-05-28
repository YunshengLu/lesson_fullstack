/* 
20. 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
/* var isValid = function (s) {
    let len = s.length;
    let stack = [];
    
    for (let i = 0; i < len; i++) {
        const start = s[i];
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        } else {
            const end = stack[stack.length - 1];
            if (
                (start == ')' && end == '(') ||
                (start == ']' && end == '[') ||
                (start == '}' && end == '{')
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length == 0;
}; */

var isValid = function (s) {
    let len = s.length;

    const map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');

    const stack = [];

    for (let i = 0; i < len; i++) {
        if (map.has(s[i])) {
            stack.push(map.get(s[i]));
        } else {
            if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};
