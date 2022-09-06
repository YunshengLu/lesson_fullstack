/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-09-06 19:12:29
 * @LastEditTime: 2022-09-06 19:35:18
 */
var num = 42;
var numObj = new Number(42);
// primitive
console.log(Object.prototype.toString.call(numObj));
console.log(Object.prototype.toString.call(num));
console.log([1, 2, 3].__proto__);