import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { createElement } from 'react';
import { createElement, render, renderDOM } from './element';
import diff from './diff'
// 跳过JSX -> 编译过程
{/* <ul className="list">
  <li className="item">周杰伦</li>
  <li className="item">王俊杰</li>
</ul> */}
let virtualDOM = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['周杰伦']),
  createElement('li', { class: 'item' }, ['王俊杰']),
  createElement('li', { class: 'item' }, ['阿妹']),
])

let virtualDOM2 = createElement('ul', { class: 'list-group' }, [
  createElement('li', { class: 'item' }, ['周杰']),
  createElement('li', { class: 'item' }, ['老王']),
  createElement('li', { class: 'item', value: '1h'}, ['阿妹']),
  createElement('li', { class: 'item' }, ['TOM']),
])
// 比较两棵DOM 树，找出差异(diff)，交给浏览器  diff 算法 + 树的遍历

console.log(virtualDOM);

let el = render(virtualDOM); // 渲染 内存中 document.createElement(tag)
// Element树 -> Tag树
console.log(el);
renderDOM(el, document.getElementById('root'));
let patches = diff(virtualDOM, virtualDOM2);
// 新的DOM 上页面
console.log(patches);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
