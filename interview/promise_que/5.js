Promise.resolve()
    .then(() => {
        // try {

        // } catch (e) {

        // }
        return Promise.reject(new Error('error!!!'))
        // throw new Error('error!!!')
        // Promise.resolve()
        // return Promise.resolve(new Error('error!!!'));
        // return new Error('error!!!'); // pro rejected
    })
    .then(res => {
        console.log('then:', res);
    })
    .catch(err => {
        console.log('catch:', err);
    });
