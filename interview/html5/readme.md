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
        JSON.parse(localStorage.getItem('userInfo'))  5-10M            
            应用场景 举出哪些？              
            - 存储地理位置 geolocation            
            - 存储登录信息 取代cookie 登录  基于token  localStorage           
                 cookie uid -> 服务器端 session中间件(基于cookie) 内存会话存储对象key value           
            - 用户信息的储存 昵称 头像             
            - redux 一些需要持久化的状态            
                todos [{text: , done}] dispatch localStorage.setItem('')             
                getItem() dispatch setTodos()            
                logined              
                userInfo            
                主题颜色，icon，风格，语言(国际化)en -> cn              
            - 用户设置             
        2. 数据库 IndexDB sql  几十M            
        3. cookie HTTP 无状态 每次都带上，加大了请求的性能开销 session 很小              
            4kb            
        4. 缓存  静态资源  js 不介入了，状态码             
    6. Cache Manifest  离线存储功能             
    7. Web Worker  浏览器给的js  多线程能力            
        - js 是单线程的             
            优点 ？ DOM 简单            
        - 高精度的计算 BigInt         
            大数据时代 城市大脑           
            web game            
            vr 虚拟现实  加密            
            event loop  搞不定            
        - js 启动一个新的线程 去专门做一件什么事情            
            告诉主线程结果           
        - js 由web worker 实现了多线程           
            js 是单线程的，结合event loop 机制 满足当下web 应用开发的需求             
            worker 目前没有主流使用，但是未来，大数据/人工智能/vr/game 可能会快速使用起来                
            1. new Worker('worker js 文件名')           
            2. 这个文件里不再使用DOM BOM 相关的功能，主线程负责这些             
            3. postMessage() 线程间通信             
            4. onmessage            
    8. html5 什么功能？点外卖 地理定位 lbs 应用  硬件能力           
        - navigator.geolocation  BOM            
        - lbs 应用是移动端时代爆发的一类应用，百度地图 美团 无人驾驶汽车             
            基于经纬度            
        - 注意保护用户隐私，在使用功能时，浏览器代理会询问是否授权             
            授权一次后，默认上次，除非清空            
        - 浏览器嗅探            
        - edge可以正常使用，chrome 等不可以，开启了https的应用才可以使用             

- 传统的登录cookie + session -> token 登录 (localStorage)              
    axios 拦截  authorization token          
    1. cookie 维护用户状态            
        克制， session_id uid           
    2. cookie expires/max age  domain path          
        httponly  Same Site Secure                 
    3. session 服务器端              
    4. session 基于cookie             
        username password session 中间件 session 对象  同时生成cookie 对象                
        sid -> 客户端也有了sid cookie -> /posts/save -> session中间件 -> 拿到cookie sid -> 后端session 内存空间 sid 作为key 去查找 会话对象里的存储 -> 登录了，用户名，头像...... 不需要去数据库查找 -> 数据库开销非常大，              