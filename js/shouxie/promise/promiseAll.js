/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-07 21:14:02
 * @LastEditTime: 2022-09-07 21:49:18
 */

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('延迟100')
    }, 100)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('延迟200')
    }, 200)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('延迟200')
    }, 200)
})


function promiseAll(promises) {
    if(!Array.isArray(promises)) {
        throw new Error('require Array')
    }
    let len = promises.length;
    let arr = [];
    let num = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((item, i) => {
            Promise.resolve(item).then((res) => {
                arr[i] = res;
                num += 1;
                if (num === len) resolve(arr)
            }, err => {
                return reject(err)
            });
        })
    })
}

promiseAll([p1, p2, p3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
