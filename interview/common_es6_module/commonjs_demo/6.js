/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-05 15:45:36
 * @LastEditTime: 2022-09-05 15:52:14
 */
let { num, add } = require('./5.js');
// 什么关系？ 引用式 拷贝式？
console.log(num);
add();
console.log(num);
num = 10;
console.log(num);