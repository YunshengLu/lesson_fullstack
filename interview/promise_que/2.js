const promise = new Promise((resolve, reject) => {
    reject('error'); // rejected
    resolve('success2');
});

promise
    // 链式调用 
    .then(res => {
        console.log('then1', res);
        // Promise.resolve()
        // return promise return this
    })
    .then(res => {
        console.log('then2', res);
    })
    // catch 当promise rejected 后 执行catch
    .catch(err => {
        console.log('catch', err);
        // return 2
        // catch then Promise.resolve() 去包一下
    })
    .then(res => {
        console.log('then3', res);
    })
