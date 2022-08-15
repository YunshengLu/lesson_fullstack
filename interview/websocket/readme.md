HTTP 协议有什么限制               
    - 无状态               
    - 完成即断开             
    - 单向传输  服务器被动伺服                

    - 在线聊天室  HTTP怎么做？                 
        广播 HTML5              
        你来我往 setInterval 轮询 + ajax + dom  请求服务器 缺点是 性能              
        服务端有推送能力  websocket 在协议层 提供新的应用(区别于web，实时聊天)方案
        底层都是TCP/IP                 
        WebSocket web 端的Socket  html5 功能，弥补了HTTP1.x 缺陷，HTTP请求只能由客户端发送请求               
        双向通信的socket 在web端的实现 HTML5              
        当客户端要和服务器建立Websocket 时，index.html Web QQ，客户端会向服务端发送一个HTTP 请求                              
        200 index.html 会包含一个Upgrade 请求头 来告知服务器，客户端想加一个            
        WebSocket 连接 不再断开，持久链接的               
        Upgrade: websocket Connection: Upgrade Sec-WebSocket  101 Switch Protcols               
        WebSocket              
        协议转换成功后，发送和接收消息就通过这个连接通道                


1. http 模块 server  