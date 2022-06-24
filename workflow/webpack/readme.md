- npm init @vitejs/app        
    react 脚手架      
    基于vite 工程化工具       
    npm 命令 node 默认命令

- webpack       
    另一个vite         
    1. template           
        src 开发目录       
        main.js 单点入口文件          
            import 项目组织起来
    2. package.json
    3. npm run dev         
        3000 端口上提供 http服务

- webpack 工程化流程         
    1. npm init -y          
        初始化项目为node 项目          
        工程化是node 的产物，前端就更专业了
    2. src/ 开发目录          
        main.js / index.js 入口文件
    3. npm i webpack webpack-cli -D            
        -D 开发依赖 工程化是开发阶段的
    4. 把项目运行起来         
        npx webpack        
        src/index.js -> dist/main.js 打包过程          
        npx 是后期推出的新功能           
        1. npx 命令行 调用package 里的npm 包
        2. 默认production模式 可以用webpack --mode=development 来设置当前模式

    5. webpack 运行后有什么效果         
        - 打包工具 pack bundler，src -> dist
        - 应用场景        
            development 开发，调试便捷为主          
            production 上线 代码体积，性能
    6. webpack 默认会去找根目录下的webpack.config.js 运行           
        ```js
        module.exports = {
            mode: 'production',
            entry: './src/index.js', // 入口文件
            output: { // 出口文件
                filename: 'bundle.js',
                path: path.join(__dirname, 'dist')
            }
        }
        ```
    
    7. 何为打包的概念？         
        从入口进入，根据依赖关系，都打包成一个文件 bundle.js      

    8. webpack 默认只处理js 类型的文件，甚至如果你要es6 -> es5，也要用 loader        
        css 文件，需要手动添加 loader (webpack 可以打包一切静态资源，选配)           
        loader ，加载特定类型文件处理的工具         
        css -> css-loader

    9. plugins         
        webpack 有插件机制          
        html-webpack-plugin 把指定的index.html ，搬到dist 目录下         
        把打包结果bundle.js 文件 自动的在html 里引入

    10. [name].[hash:8].js          
        - [] name 原来文件名 hash 唯一文件内容，只要改变了内容，就会生成新的hash，否则绝对不变
        - 浏览器本地缓存
        - 如果更新了，main.js ?         
            hash值 根据内容计算得到的          
        - 使用hash值创建版本号

    11. js 和 css 分离

    12. webpack 全家桶        
        webpack 5.73.0       
        webpack-cli 4.10.0         
        npx webpack  npx -> node_modules/webpack-cli -> webpack            
        webpack-dev-server 3.11.2  http server