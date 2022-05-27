- 同步任务阻塞 sleep
    js 通过同步任务的耗时,阻塞式的sleep  
    - java php 等语言都有内置的sleep 函数,js有吗?
        js 是单线程的语言,脆弱,不允许有 sleep 


- 90 年代末 浏览器简单的页面 js发现 -> es5(jquery)  -> es6(现代js react, babel)        
    promise -> es7 async await          
    async await  es7 提供        
    之前 有异步同步化方案 回调 地狱             
    primise 是es6 提供的异步同步化方案 then()            
    es7 还要提供新的方案 then 有不完美的地方?          
    then able 链表太过繁琐           

- 异步任务同步化方案
    1. 回调函数 地狱  3.js
    2. es6  Promise  4.js
    3. es7  async  5.js
