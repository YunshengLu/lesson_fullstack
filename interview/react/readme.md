- 虚拟DOM             
    react 不做DOM 编程，性能开销太大 Jquery             
    html + css 渲染树，一家的               
    JS V8 引擎 100公里高速              
    浏览器多线程架构              
        渲染线程独立                 
        js执行线程              

- 虚拟DOM，DOM在内存中的表达方式              
    JSX  申明式的UI HTML 片段  DOM的JSX 表达  模板                  
    React.createElement JS                
    工程化             
    1. webpack  module -> rules -> test(/.jsx$/) + loader(preset-env-react)react.createElement -> .babelrc -> 兼容env             
```jsx
    <ul>
        <li></li>
        <li></li>
    </ul>
    {'ul', {className: 'list'}, children: [
        {'li', {className: 'item'}, children}
        {'li', {className: 'item'}, children}
        ....
    ]}
```
    虚拟DOM 更新时候(web2.0 动态更新太多) 效率很明显                
        - 没有VDOM 2个li 修改内容 1个li新增                
            批量更新              
        - 把真实DOM 在内存中做了个DOM 映射 Virtual DOM               
            mounted  DOM + js 内存中 VDOM VT1           
            update 内存中生成新的VDOM2 VT2 redux 新旧状态？             
            比较 VT1 VT2 diff 过程  收集差异 -> 批量通知 真实DOM 去更新              
            二叉树             
    真实DOM 挂载到页面上去 #app                

- react 虚拟DOM            
- Element 类 type props children            
    共同点  树 文本节点是叶子节点              
- render 过程 虚拟DOM 转变成真实DOM，挂载到app 的过程             