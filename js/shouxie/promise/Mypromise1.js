// 实现最简单的promise 

class Mypromise{
    constructor(run){
        this.observerList = [];
        const notifyAll = value => this.observerList.forEach(callback => callback(value));
        run(notifyAll);
    }
    subscribe(callback){
        this.observerList.push(callback);
    }
}
// 10行代码，就把Promise的核心原理给彻底诠释了，
// 而上面的代码无非就是观察者模式的简单变体:

const asyncReadFile = filename => new Mypromise((notifyAll) => {
    const fs = require('fs');
    fs.readFile(filename, (err, data) => {
        if(err) return;
        notifyAll(data); // resolve
    })
})

asyncReadFile('./1.txt').subscribe(value => { //then
    // do something
    console.log(value);
})