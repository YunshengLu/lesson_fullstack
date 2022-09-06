/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-09-06 20:33:43
 * @LastEditTime: 2022-09-06 20:38:45
 */
console.log(1 + '1');
console.log('1' + 1);
// 当+ 左右有一个对象的时候 拼接
console.log(1 + {}); // 1[object Object]
console.log(1 + []); // 1

var obj = {
    valueOf() {
        return 1;
    },
};
console.log(1 + obj);

var obj2 = {
    toString() {
        return 3;
    },
};
console.log(1 + obj2);
