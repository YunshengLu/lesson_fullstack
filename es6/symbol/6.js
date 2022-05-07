const spread = [12, 3, 53, 5, 654, 8, 32, 32, 53, 'a', 'b', 'c', 'a'];
// filter unique
const uniqueArray = spread.filter((item, index, arr) => {
    // 重复项就false
    return arr.indexOf(item) == index;
});
console.log(uniqueArray);

// function uniqueArray(arr) {
//     return arr.filter(function (item, index, arr) {
//         //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
//         return arr.indexOf(item, 0) === index;
//     });
// }
// console.log(uniqueArray(spread));

// es6 新的数据结构
let set = new Set(spread);
const arr = [...set];
console.log(Object.prototype.toString.call(set), arr);

// 不要重复造轮子