let a = 1;
let b = 2;
let tmp = a; // 内存相关
// a = b;
// b = tmp;
// console.log(a,b);
[b, a] = [a, b];
console.log(a, b);
