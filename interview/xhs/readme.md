<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-31 13:54:52
 * @LastEditTime: 2022-08-31 15:15:25
-->
- 组件通信            
    - 以函数式组件为讨论，使用hooks来实现             
    1. 利用 props 实现组件通信           
        - 父子组件通信           
            1. 父组件负责请求和处理数据             
            2. 子组件没有自己的状态，主要负责展示数据，和调用父组件修改数据的方法               
            3. 数据的改变发生在父组件里，父组件数据改变后，子组件重新渲染              
            [state, setState] = useState()           
        - 兄弟组件间通信，通过父组件作为桥梁，任然用的是props            
    2. createContext + useContext 跨级传递共享 + 家族              
        组件家族枝繁叶茂的时候，props力不从心           
        