import B from './b.js'; // 依赖关系 递归 打包顺序
import './common.css'; // 静态资源 转换
let a = 1 + B.b; // es6 -> es5 babel babel/preset-env
console.log(a); // 打包后，index.html 能运行