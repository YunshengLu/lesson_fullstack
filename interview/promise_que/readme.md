- async 函数中await 的new Promise 要是没有返回值，就不执行后面的内容                
- then 函数中的参数期待的是函数，如果不是函数的话会发生透传             

- Promise 状态发生改变后就不能再变了            
    .then .catch 函数参数，需要先检查状态 pending              
- then catch 为了链式调用             
    then 里本身就是promise的话，没必要              
    return 简单数据，一般对象，或没有 Promise.resolve()来自动包装            
    返回值作为 参数            
    Promise.resolve() 最后返回                

- catch            
    1. rejected 后执行           
    2. 也和then Promise.resolve() 包了一下               
    3. 捕获到之前链中的错误            

- Promise.resolve(1)
    创建一个Promise 实例，return 已经resolved 后            
    then 显示的return promise  Promise.resolve(1)                
        then catch 直接return  非promise 链式res