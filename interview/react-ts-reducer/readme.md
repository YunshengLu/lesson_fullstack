- 为什么要数据流？              
    1. 组件共享数据复杂性              
        传 汇报               
        1. 父子孙            
        2. 以login 为代表 非包含关系组件共享               

    2. 数据流管理有好多种方案              
        redux            
        mobx             
        useContext + useReducer              
            - redux 思想             
            - useReducer redux 封装了一下，更好用                  
            - [状态， dispatch能力] useReducer (reducer 处理函数， 初始值)                
            - 只解决了reducer 计算 及管理                
            - 状态跨级传递  没有完全解决             
            - Provider 功能 + connect 优化了 useContext               