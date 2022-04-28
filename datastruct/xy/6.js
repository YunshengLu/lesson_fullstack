// 栈 队列 数组 有什么关系？
// 1. FILO FIFO
// 2. 数组？ 开箱即用(push pop shift unshift)
//     栈(栈底push 添加 pop 删除)和队列(队头shift删除，队尾push 添加)
//      栈和队列都可以基于数组实现，操作受限的特别数组
// array 添加元素的方法
const arr = [1,2];
// arr.push(3); // 尾部
// arr.unshift(0);
// console.log(arr);
// console.log(arr.concat([3,4]));

// splice 第二个参数为零，第三个元素可以作为添加
// 插队 在第几个元素前插入一项
arr.splice(1,0,3) // 切割
console.log(arr);