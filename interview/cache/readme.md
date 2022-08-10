## 缓存 cache            
- 前端 后端 运维            
    - 前端性能优化               
        1. 防抖节流 手写           
        2. 路由懒加载             
        3. memo useMemo useCallback  react              
        4. GPU  css          
        5. antd 按需加载 react            
        6. http 请求数量  前后端通信网络              
        7. 启用GZip 压缩              
        8. cache            

    - react 优点和缺点？              
        缺点：首页加载慢             

1. 200 第一次请求 服务器返回文件               
    如果强缓存，服务器设置Expires 响应头 过期时间 HTTP1.0              
        用户系统时钟不对的话            
    HTTP1.1  优化  Cache-Control 偏移量               
    万一在过期前，有更新呢？  换url，cache.webp new_cache.webp             
    main.1212132vsdvs.js            

2. 数据接口 协商缓存，写入比较频繁的文件                
    响应头？ 掘金首页列表             
    每次浏览器都要和服务器协商           
    浏览器带什么过来  服务器返回什么？