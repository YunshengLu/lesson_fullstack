## event loop            
- 全端的event loop         
    1. 前端          
    2. node          

- 主线程执行            
    1 7 同步             
    setTimeout event loop 宏任务                 
    then 微任务            
    process.nextTick() 微任务 优先级高于promise           
    setTimeout 宏任务           
- 第一次event loop             
    先微任务 整个队列 清空 6 8            
    宏任务 队头出队 第一个setTimeout 2 4 同步 3 5 代表的微任务进入event loop           
- 第二次event loop           
    先微任务 整个队列 清空 3 5             
    第二个setTimeout 出队 9 11 同步  10 12 代表的微任务进入event loop              
- 第三次event loop            
    先微任务 整个队列 清空 10 12                

- 整个系统idle          
