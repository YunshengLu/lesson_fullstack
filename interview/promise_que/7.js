/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-04 22:23:51
 * @LastEditTime: 2022-09-04 22:23:53
 */

async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('sync2');
}
console.log('script start');
setTimeout(() => {
    console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
    console.log('Promise1');
    resolve();
}).then(function () {
    console.log('Promise2');
});
