const p1 = Promise.resolve('p1'); // 返回一个立刻被解决的promise 实例
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2延时一秒');
    }, 1000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3延时2秒');
    }, 2000);
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p5 rejected 延时1.5秒');
    }, 1500);
});

Promise.MyAll = promises => {
    let arr = [], // 和promises 顺序一致
        count = 0; // 技术， 有多少个搞定了

    return new Promise((resolve, reject) => {
        // 并发
        promises.forEach((item, i) => {
            // 函数作用域 i VO
            Promise.resolve(item).then(res => {
                arr[i] = res;
                count += 1;
                if (count === promises.length) resolve(arr);
            }, reject);
        });
    });
};

Promise.MyAll([p1, p2, p5])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
