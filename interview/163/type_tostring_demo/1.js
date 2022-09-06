/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-06 17:04:45
 * @LastEditTime: 2022-09-06 19:10:18
 */
function Person() {

}

const aTao = new Person();
console.log(aTao);
console.log(Object.prototype.toString.call(aTao));
console.log(aTao instanceof Person);
console.log(Object.prototype.toString.call(new Date()));
