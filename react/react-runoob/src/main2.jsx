import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// root 节点 根节点？
// root 节点范围内react 起作用
// html -> js
// JSX js 扩展语法，只在react 中可以生效
// React 用来表达UI组件
// JSX 优点 UI 简单 方便
// <li>
//   <span>fsfdfsfsdf</span>
// </li>

// JSX class 不能用，得用className
// js class ? 关键字
// let name = 'Jone';
// // JSX 模板
// const element = <h1 className="bd">Hellow,{name}!</h1>;
// const Hello = () => {
//   return <div>hello {name}</div>
// }

// obj Proxy
// let [dateStr,setDataStr] = useState();
let dateStr = new Date().toLocaleTimeString();
setInterval(() => {
    dateStr = new Date().toLocaleTimeString();
}, 1000);
ReactDOM.createRoot(document.getElementById('root')).render(
    // element
    // 自定义组件
    // <Hello></Hello>
    // UI大舞台
    <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {dateStr}</h2>
    </div>
);
