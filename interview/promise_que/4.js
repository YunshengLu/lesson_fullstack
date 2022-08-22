const promise = new Promise((resolve, reject) => {
    // 封装耗时任务
    setTimeout(() => {
        console.log('timer');
        resolve('success');
    }, 1000);
});

const start = Date.now();
promise.then(res => {
    console.log(res, Date.now() - start);
});
promise.then(res => {
    console.log(res, Date.now() - start);
});
