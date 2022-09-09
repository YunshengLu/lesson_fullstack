/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-07 21:49:03
 * @LastEditTime: 2022-09-07 21:51:47
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

function promiseRace(promises) {
    if(!Array.isArray(promises)) {
        throw new Error('require Array')
    }
    return new Promise((resolve, reject) => {
        promises.forEach(item => {
            Promise.resolve(item).then(res => {
                return resolve(res)
            }, err => {
                return reject(err)
            })
        })
    })
}

promiseRace([p1, p2])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })