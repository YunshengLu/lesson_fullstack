- ts 项目 npm 标配           
    ts-node  = tsc + node  watch 文件            
    typescript  .ts->.js            

- ts 运行工程化               
    1. ts 后缀 不能直接运行(node， 前端以 DOM)               
    2. npm i -g typescript               
        tsc  typescript  compile          
    3. tsc --init           
        tsconfig.json          
    4. tsc 负责的是编译 .ts -> .js                 
        ts-node .ts 内存中编译，之后直接运行                 

- 箭头函数 不适合做构造函数           
    - 没有独立的this           
    - 缺少prototype __proto__            
    - 缺少arguments   (...args) => {}          
    - 缺少caller  无法确定上下文              
    console.dir 调试过  error           