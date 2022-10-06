## vite 为什么那么快？           
    1. webpack 工程化早期，浏览器没有普遍支持es module
    2. 项目启动 30s 以上，修改代码 2s 以上， 工程化性能优化...
        vite 只要 1s         
    3. webpack 构建工具是node           
        vite 用的是 Go        
    4. 不用打包            
        webpack  bundle 一切皆可打包            
        vite 不用打包(开发阶段)           
        很多工作交给了浏览器           
        最后还是要打包的，dist/bundle.js           
        最后用的是 Rollup 打包          

## 打包流程到底是怎样的？             
    1. 从入口文件开始 entry.js          
    2. 分析依赖及编译需求              
        打包，顺序          
        es6+ -> es5            
        css 文件加载             
        import 'common.css' loader  ->  文本  <style>cssText</style>            
        import './logo.png' 小于 10kb 转换 base64 格式