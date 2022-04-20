const name = 'Snickers';
const age = 2;

// 匿名函数
// 箭头函数，不需要function
// 如果函数体只有一句代码，并且是返回值，连花括号也省掉， return关键字也可以省掉
// 学习成本

const sayMydog = (name, age) => `My dog ${name} is ${age} years old`;
    // return `My dog ${name} is ${age} years old`;

console.log(sayMydog(name, age));
