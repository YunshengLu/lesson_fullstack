let s = Symbol(); // 独一无二
let s2 = Symbol();
console.log(s == s2);

let obj = {
    a: 1,
    [Symbol()]: function (arg) {
        console.log('-------');
    },
    [Symbol()]: function (arg) {
        console.log('+++++++');
    },
};
// console.log(obj);
for (key in obj) {
    console.log(key);
}
console.log(Object.keys(obj)); // [ 'a' ]
console.log(Object.getOwnPropertyNames(obj)); // [ 'a' ]
Object.getOwnPropertySymbols(obj).forEach(item => {
    obj[item]();
}); // -------  +++++++
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(), Symbol() ]
// console.log(obj.a);
// console.log(obj[s]());
// console.log(obj[s2]());
