- Cookie Session             
    识别用户状态            
- http 服务怎么启动？              
    node 里哪个模块 什么方法？         
    1. node 内置了http 模块，非常方便，少数几行代码就完成了任务            
    2. http 要设置成请求响应且是无状态的呢 简单            
        分布式的概念 git 分布式？ 本地 remote  合作者的不同的电脑上            
        - 互联 IP http://localhost/  127.0.0.1               
            TCP IP 双方           
        - 端口？        
            服务器 软件 web server             
            电脑 系统 linux centos ubuntu  web server 其中的一个服务                   
            web server 进程ID 端口                     
            A IP -> B(web server)           
            多项服务 mysql 数据库服务 3306  邮件服务       

    1. 用户输入url www.google.com 域名方便记忆  www 美国              
        .com .cn          
    2. www.google.com 通过dns 解析 domain system ip 地址              
        1. 问你以前访问过www.google.com             
            本地dns 缓存  host 文件         
        2. 局域网 dns 服务器           
            key value 数据库             
        3. 写入到本地          
            dns 缓存          
    3. ip TCP/IP 三次握手          
        A url method http + IP(自己的，服务器的)         
        服务器IP 端口 ->  进程(映射)            
        web server createServer callback 执行 res.end('') 返回结果           
        A IP -> 显示结果


- node 和redux 实现功能的思想有点像           
    - 这个思想就是中间件思想              
        启用中间件为我们的应用提供功能         
    - 第三方的中间件 koa-static         
        /logo.webp          
        app.use(staticServer(path.join(__dirname, './static')))                       
        静态资源服务器的搭建           
        缓存        
    - app.use(async ctx => {
        // 最普通的中间件
        // mysql 查询动态的
    })

- httpOnly            
    安全的设置 cookie 属性          
    true   js 不可以读取  避免 XSS 跨站脚本攻击         
    false  设置  日间模式，夜间模式 

- session ?         
    又一种识别用户身份状态的          
    cookie 不够用了，才又来了一个 session             
    - cookie 每次请求都会带上，吝啬大小 性能 http 越大，速度就慢了
    - cookie 每次请求中带上 客户端和服务端都有的状态标记           
        uid 足够我们识别用户吗？       
        {name : 'Tom', sex: '男', hometown: '漂亮国', level: 1, uid: 12345678}           
        内存之中 为每一给访问的用户，提供一个状态存储的空间，比cookie 会从容一些(空间更大)，方便业务展开            
        uid 关联外键  level 权限            
    - session 存储表示用户状态，只在后端内存中            
        cookie uid 传到服务器端来了，session key            
        value json 内存表数据表         
        session 基于 cookie          