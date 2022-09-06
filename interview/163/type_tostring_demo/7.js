/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-06 20:08:46
 * @LastEditTime: 2022-09-06 20:19:21
 */
var arr = [1,2]; // 1,2
console.log(arr.toString());
// 覆盖原有的toString
arr.toString = function(){
    return '43'
}
console.log(Number(arr));
console.log(String(arr));
var obj1 = {
    valueOf() {
        return '99'
    }
};
console.log(Number(obj1));