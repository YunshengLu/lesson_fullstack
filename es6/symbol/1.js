/**
 * @author user
 */
const o = require('./2');
// console.log(o);
let s = Symbol('name');
// json 不允许同名的字符串式的key
// 如何向对象添加绝对不重复的key? Symbol 唯一
let newObj = {
    ...o,
    [s]: 'aaa',
};
console.log(newObj);
// 独一无二的
// let s = Symbol();
// console.log(typeof s);
// let s2 = Symbol();
// console.log(s == s2);

// let s3 = Symbol('foo'); // Number('11')
// let s4 = Symbol('foo')
// console.log(s3 == s4);

// let obj = {
//     name: 'abc',
//     age: 1
// };
