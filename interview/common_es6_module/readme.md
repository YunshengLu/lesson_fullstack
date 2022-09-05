<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-05 14:38:17
 * @LastEditTime: 2022-09-05 16:50:42
-->
- commonjs 的特点和区别             
    - es6 commonjs 之前 模块化是怎么样的？            
    1. commonjs 是早期指定的js 模块化方案，用在node 上              
        - 代码组织问题 mvc           
        - script 文件引入js            
            1. js 文件作用域都是顶层，会造成变量污染             
                冲突         
                const A = require('./a.js');          
                import A from './a.js';         
                (function() { // 立即执行函数
                    window.A = 
                })(window)
            2. 文件多，变得不好维护           
            3. js 文件依赖问题，引入顺序有问题，代码全报错             
                原来顺序是机械的            

- 要解决的问题            
    1. 解决变量污染问题，作用域(以前：立即执行函数，现在：模块化)             
    2. 解决代码维护问题，代码清晰(mvc mvvm)              
    3. 文件依赖(import require 写在头部)                         
        ？webpack vite 去处理          
        入口文件        

- commonjs 导入的值是拷贝            
- es6 导入的值是引用，并且内部有映射关系，只读状态              

- babel 是js 编译器，新的生命            
    可以让任何的js 新的版本和高级能力，落地             

- es module 也解决了 变量污染、依赖顺序问题，语法更灵活，加强了代码的可读性            

- CommonJS 和 ES module 的区别            
    - CommonJS 可以动态加载语句，代码发生在运行时             
    - CommonJS 混合导出，还是一种语法，只不过不用声明前面对象而已，当我导出引用对象时，之前的导出就被覆盖           
    - CommonJS 导出值是拷贝，可以修改导出的值，容易出错,不好读,且污染            
    
- ESModule           
    - 是静态的,不可以动态加载语句  import('./a.js') 不一样          
        import 只能在最顶部,代码发生在编译时              
    - ESModule 混合导出,单个导出,默认导出,完全互不影响            
    - ESModule 导出是引用值之前存在映射关系,只读            