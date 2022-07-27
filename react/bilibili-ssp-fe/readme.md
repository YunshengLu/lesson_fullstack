- 大前端项目           
    - bilibili-api 提供数据接口服务               
        - koa  后端框架              
            中间件为特色的开发思路           
    - index.js 单点入口                  
        - http  服务          
        - 路由、跨域、数据库连接、session服务等中间件             
            koa-cors            
        - 注意  保持简洁             
            - 路由不让在index.js 出现太多           

- 路由模块化如何做？              
    1. 添加一个routers 目录           
    2. 每个路由模块都有单独的文件          
    3. Router.get  返回 router.routes()              
    4. index.js  跟路由  router.use('/search', searchRouter)              
    5. app.use(router.routes())              
- fastmock -> routes + data             

- 前端 react 全家桶 + ts          
    1. 准备                 
        - css reset  iconfont rem.js             
            安装 styles-components  createGlobalStyle IconStyle              
            rem.ts 要模块化            
    2. vite.config.js alias            
    3. rem 任然使用 rem 作为适配方案              
        设计师给的设计稿 750px iphone             
        vw 作为适配方案             
        px2rem 手动封装   css  超集  styled-components  stylus/sass            
        不用每次去算，看设计稿的，蓝湖            
    4. logo 等图片用的不是 png jpeg...   像素图片  放大 模糊？           
        svg 图片格式，html 写出来的          
        logo 最在意的是什么？          
        手机 -> PC -> 电视  logo.png             
        svg  矢量图  (数学图形) + canvas  数据可视化方向            
        无限拉伸             

- ts api            
    1. axios 作为请求后端的库             
    2. 配置 baseURL + 拦截              
        config.ts          
    3. 所有的请求列出来          