// 数组去重
const arr = [12,3,53,5,654,8,32,32,53,'a','b','c','a'];
const obj = {};
arr.forEach(item => {
    // 去重
    obj[item] = item;
})

console.log(Object.keys(obj));