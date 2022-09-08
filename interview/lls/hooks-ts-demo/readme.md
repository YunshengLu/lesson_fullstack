<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-07 14:44:46
 * @LastEditTime: 2022-09-07 15:07:15
-->
- react 深入 + hooks 手写 + ts            
    1. hooks 自定义hooks 原因是什么？                   
        1. 变量状态useState           
        2. 副作用useEffect             
        3. 性能优化 useCallback(函数) useMemo(值) react.memo(props)             
            大的父组件 + n 个子组件           
            useCallback + React.memo            
            useMemo              
        4. 数据流 useContext useReducer  代替redux              
        5. useRef 标签的所有属性             

- 购物车组件           
    - 勾选的工作和状态            
        复杂            
    - 钩子函数              
        1. 函数封装           
        2. 复用             
            在react 内置的hooks 只外，开发一些自定义hooks               
            大大的提高开发效率           