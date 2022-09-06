/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-06 20:47:56
 * @LastEditTime: 2022-09-06 20:49:06
 */
console.log([1, 2] + {});
var obj = {
    valueOf() {
        return 12;
    }
};
console.log(true + obj);