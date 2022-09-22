// 给出一个数字，找出它是斐波那契数列中的第几个数
// * - 斐波那契数列 `[1, 1, 2, 3, 5, 8, 13, ...]`，后一个数字是前两个数字之和
// * - 输入的数字大于等于 2
// * - 如果输入数字不存于斐波那契数列中，返回 -1 
function findIndexInFibonacciList(num) {
    let n1 = 1;
    let n2 = 1;
    let arr = [1, 1]; // fabo
    let j = 3; // 计数器 第j个
    if (num == 2) return 2;
    for (let i = 2; i <= num; i++) {
        // i 不是 fabo
        if (i = n1 + n2) { // 是
            arr.push(i);
            // 动态计算n1 n2
            n1 = arr[j - 2];
            n2 = arr[j - 1];
            j++;
        }
    }
    return arr.indexOf(num);
}

console.log(findIndexInFibonacciList(5));