/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-31 16:47:09
 * @LastEditTime: 2022-08-31 16:50:01
 */
let fun = () => console.log('time out')

let sleep = function (func, time) {
    setTimeout(() => {
        func();
    }, time);
};

sleep(fun, 2000);