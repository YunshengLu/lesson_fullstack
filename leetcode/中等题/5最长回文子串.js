/* 5. 最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。


示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    const n = s.length;
    // 设 dp[i][j] 为从 i 到 j 的字串是否为回文
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
    let start = 0,
        end = 0,
        max = 0;

    for (let j = 0; j < n; j++) {
        // 因为单个字符串也可看作是回文子串，所以 i <= j
        for (let i = 0; i <= j; i++) {
            // 由 i <= j 推出 i + 1 <= j - 1 推出 j - i >= 2，因此满足此条件 dp[i + 1][j - 1] 才成立
            // 当 j - i < 2 && i <= j 推出 j - i 只能为 0 或者 1，即 i === j 或者 i 与 j 相邻
            // 所以当 s[i] === s[j] && j - i < 2 时满足回文子串；
            // 当 s[i] === s[j] && dp[i + 1][j - 1]) 时满足回文子串
            if ((dp[i][j] = s.charAt(i) === s.charAt(j) && (j - i < 2 || dp[i + 1][j - 1]))) {
                const len = j - i + 1;
                if (len > max) {
                    max = len;
                    start = i;
                    end = j;
                }
            }
        }
    }

    return s.slice(start, end + 1);
}
