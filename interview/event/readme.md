- event loop  event 内置type mouse key touch   DOM0 DOM2           
- 自定义事件 event bus            
    - 自定义任何类型的事件，并且使用emit 触发回调           
    - EventEmitter 构造函数中 使用了Map 作为存储的容器 1. 存             
    - 编写了addListener 事件 存进容器              
    - emit 方法，使用响应的type 取出对应的函数执行              
    - 事件并不复杂            

- 设计模式，订阅发布者模式              
- react MVVM 核心            