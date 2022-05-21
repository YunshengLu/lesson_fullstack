- 代码上线前,      
    把模块化的一堆代码(入口文件),打包成一个文件       
    大大的有利于页面打开速度,对网页性能的优化      

    - 写代码只是工作的一部分,代码上线也是我们的工作       
    大前端整个工作 叫工作流


- 怎么把模块化的,会带来多个http请求,合并成一个文件      
    1. 合并      
    2. 功能不受影响      

- 模块化 module 方案 JS 早期没有模块化方案           

    - 我们所使用的JS的模块化方案，就是对模块化机制的实现。早期的JS程序只负责处理简单的页面交互，并不庞大，因此没有设计好的模块化方案。但随着JS程序越发庞大，需求推动之下，一些JS库或个人设计了自己的模块化方案，就有了现在的CommonJS，AMD，CMD           
    - ES-Module是后来者，它的目标是为JS提供一个官方标准的Module实现
- 两种模块化方案：

    - commonJS 模块化方案 require + module.export (node.js)       
    - es6 模块化方案 import from + export default

    node 除了是后端环境外,还可以给我们带来前端DOM没有的能力,合并功能 rollup            

    - 初始化环境 npm init -y        
    - 下载rollup npm i rollup              
    - 项目描述："bulid":"rollup m2.js --file bundle.js"           
    - 合并 npm run bulid