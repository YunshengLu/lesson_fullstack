- 分词 token         
    import 依赖关系           
    let 定义一个变量  var            

- 抽象语法树 AST           
    npm 包做这件事           

- @babel/core @babel/preset-env es6 -> es5           
- @babel/traverse  一直        
- babylon AST        

- 从入口文件开始，使用babylon 分词，生成抽象语法树AST            
- babel reaverse 遍历 token 节点           
- 将AST 交给babel/core 的 transformFromAst 和 @babel/preset-env        
    转义，完成es6 -> es5            
- 分析依赖关系，递归调用 上一步 完成编译          
- css 等其他静态资源单独处理           
- 再根据webpack 等打包工具的语法 把收集到的代码 组织并写入bundle.js             