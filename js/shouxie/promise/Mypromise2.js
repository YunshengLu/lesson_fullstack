const PENDING = 'pending';
const FULFILLED = 'fulfilled';

class Mypromise {
    constructor(run){ // run: (resolve) => any
        this.observerList = [];
        this.status = PENDING; // using status
        const resolve = value => {
            if(this.status === PENDING){
                this.status = FULFILLED;
                this.observerList.forEach(callback => callback(value));
            }
        }
        run(resolve);
    }
    then(callback){
        this.observerList.push(callback);
    }
}

const p = new Mypromise(resolve => {
    setTimeout(() => {
        resolve('1');
        resolve('2'); // don't work
    },1000)
});

p.then(console.log)