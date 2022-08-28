<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-25 10:23:40
 * @LastEditTime: 2022-08-25 11:43:56
-->
- useEffect            
    1. mounted componentDidMount                
    2. update [] 多次使用 useEffect               
        [count, ...]                
    3. unmounted  return () => {} 卸载时                
        回收定时器 setInterval            
- useState 传统题 类式组件中 this.setState             
    同步还是异步？               
    setState 并不能保证是同步的，在生命周期函数和合成事件中是异步的，在原生事件和 setTimeout 中是同步的               
- React事件模型(合成事件)              
    - React 不等同于html 原生事件             
    - React 事件利用了 原生事件的委托机制               
        - 事件委托——事件性能优化的一种              
        - Component/HTML 每个事件都独立的话，那么很耗性能              
    1. JSX 合成事件是驼峰式onClick 原生事件是全部小写onclick                
    2. 执行时机不同，合成事件全部委托到document.body上，而原生事件绑定到DOM元素本身                
    3. unmounted 事件的取消也很方便，                  
    4. event.preventDefault                
        阻止冒泡 event.stopPropagation();             
- React.memo, useMemo, useCallback                  
    - 性能优化             
        父子 子组件的额外渲染               
        父组件状态发生了改变， 父组件函数重新运行                
        - 父组件状态的更新与子组件无关,React.memo 缓存渲染，不更新 初级              
        - 父组件状态的更新和子组件有关？一定要更新吗？                 
            可以细腻度控制              
            保护衣               
            range拖动时频繁更新，<100 非常不满意 <200 有点不满意 <300 满意    非常满意                    
            React.memo 第二个参数依赖                
            依赖不变则不变               