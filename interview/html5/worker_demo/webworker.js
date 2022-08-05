// 新线程 dom 变成不可以，耗时，计算类，复杂功能
let i = 0;

function timedCount(){
    i = i + 1;
    // 递归
    postMessage(i); // 子线程向主线程汇报
    setTimeout(timedCount, 500)
}

timedCount()