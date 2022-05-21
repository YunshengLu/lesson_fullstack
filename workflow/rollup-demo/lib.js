// lib 库
var counter = 3;
function incCounter() {
    ++counter;
}

module.exports = {
    // counter,
    // 方法
    get counter() {
        return counter;
    },
    incCounter,
};
