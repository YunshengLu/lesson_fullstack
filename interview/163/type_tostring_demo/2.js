/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-06 17:04:48
 * @LastEditTime: 2022-09-06 18:18:35
 */
// 隐式类型转换和强制类型转换的关系是？
console.log('abc'.length); // 包装类 String()
console.log(Object.prototype.toString.call(new String('abc')));