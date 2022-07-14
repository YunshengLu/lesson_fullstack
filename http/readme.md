- node 和 es6 在模块化上可以共处        
    1. react ex6+          
        node cjs 阶段          
        js 优点就是前后端通吃 cjs esm 导致代码风格不太ok，两套代码        
        不能接受         

    2. 引入工程化解决问题           
        babel         
        写的代码可以转变成能运行的代码              
        @babel/core @babel/cli @babel/preset-env @babel/node            
        babel.config.js         
        npx babel-node 1.js

- web server          
    后端种Cookie           
    res.setHeader('Set-Cookie', ['type=ninja','language=cn'])           
    阿里国际站

    req.url == '/about' 等我们从/about 访问时           
    自动带上 Cookie 去访问          

    cookie 是一段文本，用于弥补http 无状态的缺陷           

    http 无状态协议？          
    Stateless 每次请求都是独立的，没有相关性 简单        
    http 0.9 web 发明时代           
    在 http 1.0 有了微软 blog  版本里 加了 cookie 状态          
    一段文本 4kb key=value;key2=value2;

    服务器或客户端都可以种cookie           
    之后的每次请求中，都会带上cookie          
    没有改变http 无状态         
    服务器端解析cookie 就可以获得用户身份了            


- Cookie 属性         
    不同的网站，访问时带上相应的cookie Domain(域名)          
    百度种的和掘金种的就不一样          
    - path 除了域名限定外，还可以做路径限定 /admin 后台         
      /admin cookie 与 juejin 用户端            
      / 所有路径都可以访问        
      /admin 后台 才会带上 用于特殊权限管理           

    - Expires / MaxAge  Cookie 过期即删除          
        Expires 时间戳        
        MaxAge 倒计时      

    - HttpOnly          
        安全性而来 如果为true            
        js 不能访问
