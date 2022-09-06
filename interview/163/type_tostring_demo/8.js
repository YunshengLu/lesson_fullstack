/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-06 20:29:38
 * @LastEditTime: 2022-09-06 20:32:44
 */
console.log(10 / '2');
console.log('10' / '2');
var obj = {
    valueOf() {
        return '2'
    }
};
console.log(100 / obj); // 隐式类型转换 遵守强制类型的规则 primitive toString