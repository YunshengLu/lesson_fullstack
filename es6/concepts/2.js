// 箭头函数
// 简化函数 ， 不用写 function {}  返回值只有一句不用写  return

// 歧义 函数得{} ，对象字面量的{}
// 箭头函数 只有一句代码， 且是返回值

// const func = (a, b) => a + b;
// const func = (a, b) => {
//     return{val: a + b};
// };
// console.log(typeof func);
const func = (a, b) => {
    val: a + b;
};
console.log(func(1, 2)); // undefined
