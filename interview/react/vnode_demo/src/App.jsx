// // import { createElement } from 'react';
// import { createElement, render, renderDOM } from './element';
// // 跳过JSX -> 编译过程
// {/* <ul className="list">
//   <li className="item">周杰伦</li>
//   <li className="item">王俊杰</li>
// </ul> */}
// let virtualDOM = createElement('ul', { class: 'list' }, [
//   createElement('li', { class: 'item' }, ['周杰伦']),
//   createElement('li', { class: 'item' }, ['王俊杰']),
// ])

// console.log(virtualDOM);

// let el = render(virtualDOM); // 渲染 内存中 document.createElement(tag)
// // Element树 -> Tag树
// console.log(el);
// renderDOM(el, document.getElementById('root'))

const App = () => {
  return(
    <div></div>
  )
}

export default App