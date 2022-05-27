// 异步的sleep，同步代码放到thenable 里面去运行
function sleep(time) {
    // 耗时任务，封装在Promise 内部  resolve
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}

sleep(1000).then(() => {
    console.log('sleep之后要做的事情');
});

console.log('1111');

/* for(let i = 0; i < 5; i++){
    sleep(1000*i).then(data => {
        console.log(i);
    })
} */
