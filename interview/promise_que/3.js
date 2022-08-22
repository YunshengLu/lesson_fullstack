// Promise.resolve(1) // static method
Promise.reject(1) // Promise 实例 Promise <rejected>
    .then(res => {
        console.log(res);
        return 2; // Promise.resolve(2)
    })
    .catch(err => {
        return 3; // Promise.resolve(3)
    })
    .then(res => {
        console.log(res);
    })