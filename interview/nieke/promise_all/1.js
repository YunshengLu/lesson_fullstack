/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-31 17:41:16
 * @LastEditTime: 2022-08-31 17:52:11
 */
function promiseAll(promises) {
    return new Promise(function(resolve, reject) {
        if (!Array.isArray(promises)) {
            throw new Array('must be an array')
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedResult = [];
        for (let i = 0; i < promiseNum; i++) {
            // 并发
            Promise.resolve(promises[i])
                .then(value => {
                    resolvedCounter++;
                    resolvedResult[i] = value;
                    if (resolvedCounter == promiseNum) {
                        return resolve(resolvedResult);
                    }
                }, err => {
                    return reject(err);
                })
        }
    })
}

// 测试用例 驱动写正确代码
let p1 = new Promise(function (resolve, reject) {
    setTimeout(() =>{
        resolve(1)
    }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
    setTimeout(() =>{
        resolve(2)
    }, 1000);
});
let p3 = new Promise(function (resolve, reject) {
    setTimeout(() =>{
        resolve(3)
    }, 1000);
});

promiseAll([p1, p2, p3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })