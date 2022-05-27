// 回调退出历史舞台
// 发现Promise 异步同步化的缺点
function f1() {
    return new Promise((resolve, reject) => {
        console.log('f1');
        setTimeout(resolve, 2000);
    });
}
function f2() {
    return new Promise((resolve, reject) => {
        console.log('f2');
        setTimeout(resolve, 2000);
    });
}
function f3() {
    return new Promise((resolve, reject) => {
        console.log('f3');
        setTimeout(resolve, 2000);
    });
}
function f4() {
    return new Promise((resolve, reject) => {
        console.log('f4');
        setTimeout(resolve, 2000);
    });
}

// 异步任务很多的时候？ 回调  promise  then 链
// 繁琐
// es7 提出可不可以不要thenable 太多
f1()
    .then(()=> {
        // 返回新的promise 实例，继续then 下去
        return f2();
    })
    .then(()=> {
        return f3();
    })
    .then(()=> {
        return f4();
    })