- jwt           
    登录            
    cookie session 怎么实现登录的？            
    1. 用户会话状态和身份            
    2. uid          
    3. 权限           
        cookie uid -> mysql uid 相等              
        关系型数据库            
        CRUD uid          
    设置一个逻辑把 uid 给做掉            
    cookie session 安全           
    新的方案  加密  解密             
    给前端的是 加密后的 cookie  uid  koss: id  拿去后也没用 token localStorage 签发凭证            
        - http 性能问题            
        - axios 拦截 token            
    服务器端 解码 uid -> session -> 会话对象拿出来             
        - token -> {
            uid: 
            username: 
            password: .....
        }             

- mvc 模式理解         
    1. 路由是后端重要模块            
        www 服务的核心解决了资源定位问题             
        restful   一切皆资源              
        get/post Method  url  /path              
    2. 路由要克制，只做路由的定义              
    3. 立马交给 controller             
        三层之一         
    4. controller 参数解析，校验               
        业务开发，调用model 层，取数据               
        把结果写入view 层(响应json)             

- post 拿请求体数据 用中间件          
    1. http 请求中 post 更复杂              
    2. 处理请求体之前先手机请求体数据             
        body-parser             

- jwt 面试官考题逻辑              
    1. 深入 了解http 协议            
        - POST 和 GET 不一样  编码 x-www-form-urlencoded               
            application/json  form-data              
        慢慢到达过程 -> controller 提前准备好数据接受                 
        bodyparser 请求体 parser成json {username, password} = ctx.request.body           
        - accessToken 放在 header 中，Authorization                
            http Author ... 特定的语义           
        - cookie 每次带uid 明文，token 是拿不到uid的 只能在服务器解开               
        - session + cookie/session + jwt 都可以 后者更安全                
    2. 中间件         
        cors bodyParser 数组， web打理过程是多个中间件相互合作的，流程，需要我做我就做，做完通过next 向后传递 ctx.body           
        基于请求响应http，中间件打理这个流程              
        post /api/auth/login  -> cors -> bodyparser -> controller                
        post /api/test/comment -> cors -> auth -> controller             
        auth 手写中间件，复用jwt 鉴权               

- 策略和计划           
    1. 开始秋招 8月15日             

    - 面试准备             
        1. 面试是学习的一部分               
            表达 经验             
        2. React 考点 + react 源码            
        3. 算法             
            - 优先搞排序              
                - 快排              
            - 二叉树            
            - 分治 贪心 动态规划               
                掘金 修言算法              
            - 腾讯 字节级别             
        4. js 复习             
            神三元上中下              
        5. es6          
            冴羽            
        6. http https tcp udp            
            神三元               
        7. css3           
            考题            
        8. 工程化            
            提升           
        9. 如何介绍自己的项目              
        10. 八股文            
            有了面试再背 理解后            
        11. ts            
        12. 模拟面试            

- 第一阶段的复习 2周               
    ts + node  3个页面以上...            
    闭上眼睛 思维导图             