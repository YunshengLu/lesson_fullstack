// 太大，超出计算范围
let a = 12345678909876543212345678901111111111111111111111111n; //number?
// console.log(a + 1); // 数字太大了，超过计算范围
// console.log(0.1 + 0.2); // 小数相加 js number 没有特定的 数值类型  都是二进制表达，小数位不够精确
// console.log(typeof a); // bigint

let b = BigInt('123452463892574618452975897192754280');
// console.log(b);
// console.log(a + b);
console.log(1n + 2n);
// console.log(5n / 2n);
// console.log(5n + BigInt(1)); // 不能混用？ 强制类型转换 类型转换
console.log(Number(5n) + 1); // 不能混用？ 强制类型转换 类型转换
// console.log(+ new Date()); // 类型转换 隐式类型转换
// console.log(true + 1);
// console.log('1' + 1);
console.log(typeof String(true),String(123));
console.log(+'1');
// console.log(+ BigInt(1)); // 大数据不能这样用
