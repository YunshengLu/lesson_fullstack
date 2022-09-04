setTimeout(() => {
    console.log(1);
})

const p1 = Promise.resolve(() => {
    console.log(2);
})

const p2 = new Promise((resolve, reject) => {
    console.log(3);
    resolve();
})

Promise.race([p1, p2]).then(() => {
    console.log(4);
})

Promise.all([p1, p2]).then(() => {
    console.log(5);
})

console.log(6);