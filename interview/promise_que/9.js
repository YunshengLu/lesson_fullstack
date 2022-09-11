/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-09-05 12:26:08
 * @LastEditTime: 2022-09-05 12:36:54
 */
setTimeout(() => console.log('g'), 0);

console.log('a');

Promise.resolve()
    .then(() => console.log('b'))
    .then(() => console.log('c'));

new Promise(resolve => {
    console.log('d');
    resolve();
})
    .then(() => {
        console.log('e');
    })
    .then(() => console.log('f'));
