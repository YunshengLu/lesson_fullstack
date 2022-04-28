// 1. 数组和对象字面量类型都是object
// 2. 数据容器
// 3. 数组是用整数做下标 连续的 0~ arr.length-1
//  对象是key:value
let fruits = ['Apple', 'Banana'];

console.log(Object.prototype.toString.call(fruits)); // [object Array]
console.log(Array.isArray(fruits)); //true

let obj = {
    name: 'apple',
    collor: 'red',
};

// 遍历数组
fruits.forEach(function (item, index, array) {
    // item:元素，index:索引 ，array:遍历的数组
    console.log(item, index, array);
});

fruits.forEach(item => console.log(item));

for (let i = 0; i < fruits.length; i++) {
    //计数循环 快 机器思维的代码 面向cpu编程
    console.log(fruits[i]);
}

for (let item of fruits) {
    // 新es6方案 可读性更好，面向人类编程
    console.log(item);
}

// for...in遍历对象,遍历数组有点慢，一般都拿来遍历数组
for (let key in obj) {
    console.log(obj[key]);
}
