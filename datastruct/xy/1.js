// 怎么创建数组？
// - 数据结构 代码的优化是有意义的
// - 平时开发中，算法用的少一些
// - 面试？ 针对面试  去学习就可以？
// - 算法导论，学校的数据结构书  效率
// - 刷题 leetcode
// 基本数据结构  访问第几个元素(行为) 时间复杂度O(1)
// const arr = []; // easy way length 没定，items类型也没有定？ 随意
// 数组比较易用，相对于链表 默认用数组来实现
// const arr = new Array(7)  // <7 empty items>
const arr = (new Array(7).fill(1));
console.log(arr);