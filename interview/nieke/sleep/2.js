/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-31 16:49:40
 * @LastEditTime: 2022-08-31 16:52:35
 */
// es6 promise
let fun = () => console.log('time out');
// sleep 函数
let sleep = time => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
};
sleep(2000).then(fun);
