// es6 合并两个数组并去重
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 6, 7];
// 简洁高效，易读
// 其他大型语言 都具有的Set 数据结构 js像其他大型语言一样具有企业级开发的能力
// 去重的Set容器，快速的编程数组Array.form
const arr3 = Array.from(new Set([...arr1, ...arr2])); // 展开运算符