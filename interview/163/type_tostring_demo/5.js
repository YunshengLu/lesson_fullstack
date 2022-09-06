/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-06 19:34:51
 * @LastEditTime: 2022-09-06 19:48:15
 */
String(4);
console.log(typeof String(false));
console.log(String(null));
console.log(String(Symbol('s')));

// toString()
console.log(String({a: 2}));
console.log(String([1, 2]));
console.log([1, 2].toString());
console.log(String(/reg/g));
