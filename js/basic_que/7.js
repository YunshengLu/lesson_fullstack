// 类型的转换 显示和隐式
// 3 种
/* 转换成布尔值
转换成数字 false
转换成字符串 + */

console.log(1 + '1'); // 11  + 先拼接优先
console.log(true + true); // 2 加法
console.log(true == 2, true == 1);
// if(2)  2 => true
console.log(4 + [1, 2, 3]); // 41,2,3
// + true + new Date()
console.log('a' + +'b'); // aNaN
console.log(Number.isNaN(+'a1')); //true
if (!+'a1') {
    console.log('------');
}

console.log(4 * '3'); // 12
console.log(4 * []); // 0
console.log(4 * [1, 2]); // NaN
