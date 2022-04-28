/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// 思路： 切割字符旋转一周，每旋转一次对比一次
//  var rotateString = function(s, goal) {
//     if(s.length === goal.length){
//         for(let i = 0; i < s.length; i++){
//             if(s===goal){
//                 return true;
//             }else{
//                 s=s.slice(1,s.length)+s[0];
//             }
//         }
//     }
//     return false;
// };
// 超时了……


// 箭头函数，执行时间64ms少了20ms
let rotateString = (s, goal) => {
    if (s.length === goal.length) {
        for (let i = 0; i < s.length; i++) {
            if (s === goal) {
                return true;
            } else {
                s = s.slice(1, s.length) + s[0];
            }
        }
    }
    return false;
};

console.log(rotateString('abcde', 'cdeab'));

//  大佬解法
// 所谓的旋转其实就是以任意位置开始，到转回来自己结束。
// 即为两个原字符串拼接的子串
// return s.length === goal.length && (s + s).indexOf(goal) !== -1
