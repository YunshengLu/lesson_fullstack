// js脚本 直接运行  c c++ java
// 1. Promise 构造函数会立即运行,第一个参数(函数) 立即执行
// 2. p1 Promise {status:pending}
// 3. p1 status 无法从 Pending -> Fulfilled
const p1 = new Promise(r => console.log('立即打印'))
// p1.then(() =>{
//     console.log('p1 解决了');
// })

// 如何让Promise 构造函数不要立即执行 