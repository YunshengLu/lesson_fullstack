// let 是js es6 变量声明的关键字
/**
 *  1. 变量名代表值所在的空间，在内存中声明了一个空间地址
 *  2. index.html运行在浏览器中
 *  3. 控制台通过变量名找到，全局变量
 */
let num;//undefined
console.log(typeof num); //typeof 显示变量的类型,undefined

num = 1; // 数字类型
console.log(typeof num); //typeof 显示变量的类型,number

num = 'ab'; //字符串类型
console.log(num);

// const 声明常量
const String = 'ad'; // 字符串类型

//布尔类型
/**
 * 1. 解决了js 弱类型的问题
 */
let isSingle = true;

let gf = null;// 声明变量，值为空