/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-06 16:59:23
 * @LastEditTime: 2022-09-06 18:14:18
 */
// 隐式类型转换是强制类型转换的执行
// 写代码禁用 == 用 ===
console.log(0 + '1' === '01'); // true
console.log({} + [] === 0); // false 浏览器环境 {} + [] === 0 为 true