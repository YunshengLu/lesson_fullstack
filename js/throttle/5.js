// async await 出来
// 没有抛弃promise，抛弃烦人的thenable 链条
function sleep(time) {
    // 耗时任务，封装在Promise 内部  resolve
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}
// es7 函数的修饰符 async 函数 异步
(async function () {
    // 函数的内部的异步任务，如果是用promise 来封装的话，可以实现同步化效果
    console.log('Do some thing,' + new Date());
    // await 右边的返回值是promise 实例
    await sleep(3000); // await 是与async 一起出来的
    console.log('Do some thing,' + new Date());
})();

sleep(2000);
