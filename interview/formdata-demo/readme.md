实战开发能力 18           
- 心理上的跨越           
    套路          
    1. formdata 上传文件？           
        底层逻辑  复杂的业务 + 基础知识的考察              
    2. form-data 是form 表单  提交数据的编码格式 上传文件时必须                
        默认是 x-www-form-urlencoded          
    3. postman 工具 请求模拟工具         
    4. node 对post 请求体的解析，因为和get url 传参？           
        慢慢到达？中间件？body-parser           
        慢慢收集传过来的数据，要在路由前启动             
        req body + method + url -> bodyParser 数组准备好 -> 路由          
        koa-bodyparser 默认支持 x-www-form-urlencoded          
    5. koa-multer 优秀的文件上传中间件          
        你处理过什么复杂的业务？  文件上传                
    6. 流程        
        form-data multipart  ->  multer diskStorage 配置 multer(config)  ->  post 中间件  ->  router             
        中间件思维  router ->  登录auth鉴权中间件，文件上传  ->  router 处理中间件              

- html5 主题  想到哪些东西              
    - html ？ xml 1990 年左右出现的文档标记语言            
    - html4 1997               
        DTD？             
    - html5 2008 推出          
        <!DOCTYPE html> 标准的html5 的声明                        
    - html5 有哪些“新”特性             
        1. 语义化标签              
            canvas  video?  audio? 以前有flash            
            - 比所有布局全部采用div 标签 代码可读性提升             
            - 有利于SEO 搜索引擎优化 识别页面结构  article  更加重要              
            - 方便设备解析，盲人阅读              

- html5 有哪些功能？            
    1. 表单功能增强              
        - input type  placeholder  autofocus  required   maxLength  minLength               
        - formData           
    2. video audio  B 站  爱奇艺            
    3. canvas(显卡显存) 弹幕(刷火箭送礼物  高帧率刷新  requestAnimationFrame)  游戏             
    4. 拖放             
    5. 本地存储 用户端           
        1. localStorage sessionStorage             
        key => value  setItem('userInfo', JSON.stringify(user))              
        JSON.parse(localStorage.getItem('userInfo'))            
        2. 数据库 IndexDB sql            
        3. cookie            
    6. Cache Manifest  离线存储功能             
    7. Web Worker  浏览器给的js  多线程能力            