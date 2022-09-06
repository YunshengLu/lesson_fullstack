/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-06 19:54:33
 * @LastEditTime: 2022-09-06 19:59:56
 */
// Number() 强制类型转换
console.log(Number('4'));
console.log(Number('4a'), parseInt('4a'));
console.log(Number(''));
console.log(Number(null));
console.log(Number(undefined)); // NaN
console.log(Number(Symbol('s')));
