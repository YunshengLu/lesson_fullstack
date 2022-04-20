/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//     if (x < 0) {
//         return false;
//     } else {
//         // 将数转换成字符串，切割成数组，翻转数组，转换字符串，最后转换成整数
//         let y = parseInt(x.toString().split('').reverse().join(''));
//         return y === x ? true : false;
//     }
// };

// 换下面的写法执行用时和内存都少了
var isPalindrome = function (x) {
    let i = x.toString();
    let num = i.split('').reverse();
    let nums = i.split('');
    if(x<0){
        return false;
    }else{
        if(num.toString() == nums.toString())
        return true;
        return false;
    }
};

console.log(isPalindrome(121));
