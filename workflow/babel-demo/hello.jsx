import React from 'react';
import ReactDOM from 'react-dom/client';
// JSX React 用来描述UI
// 转义的过程
// JSX  ->  页面上运行
const Hello = () => <div>Hello World!</div>;
ReactDOM.createRoot(document.getElementById('root')).render(
    <Hello />
);
