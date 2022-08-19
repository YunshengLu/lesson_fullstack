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
const p4 = Promise.reject('p4 rejected');
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p5 rejected 延时1.5秒');
    }, 1500);
});

// // Promise.race([p1, p2, p3])
// //     .then(res => console.log(res));
// Promise.race([p4, p2, p3])
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// Promise.race([p5, p2, p3])
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// 基于promise 来实现
Promise.MyRace = (promises) => {
    // 
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            throw new Error('需要是数组')
        }
        // race
        for (const item of promises) { // es6 for of 遍历
            // 并发
            Promise.resolve(item).then(resolve, reject)
        }
    })
}

Promise
    .MyRace([p3,p1])
    .catch(err => {
        console.log(err);
    })