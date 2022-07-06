- fullstack 全栈      
    1. 前端方向 vitejs/app 工程化生成单页应用
    2. 后端使用 开源的 Neteasecloud         
        - .git 干掉           
            同一个目录下不能有多个git
    3. 前端和后端怎么交流？        
        axios api ->       
        frontend 8080 UI 组件 需要数据 (fastmock 假数据)        
        backend api 3000 接口          
        前后端分离

- npm install -g cnpm -registry=https://registry.npm.taobao.org        
    - -g 全局安装 cnpm 来自阿里        
    - npm i 国外的服务器上去把package.json 中依赖的包下下来，慢，容易出错        
    - cnpm i 到阿里云上下载，更快        
    - -registry 手动设置安装源        
    cnpm 和 npm 用法一样

- react 全家桶到位      
    react 负责组件化，MVVM 响应式          
    react-router 负责路由          
    redux 数据流管理          
        前端 -> api -> redux(中央银行) -> 后端

- react 是声明式的UI 组件开发框架      
    1. 那么多组件 好复杂，好多API 一样
    2. 可以用组件来声明功能，更好读

- react + ReactDOM         
    react-router + react-router-dom      
    redux + react-redux

- 数据仓库的搭建过程       
    1. 从react-redux 中解构Provider         
        声明给应用添加数据管理功能     
    2. store 专有目录下redux中的 createStore 创建仓库实例
    3. createStore 方法接受reducer 函数

1. reset        
    神三元使用了styled-components 提供的 createGlobalStyle 全局样式          
    styled.div`` wrapper 容器 hash 化       
    icon       
2. adapter

3. axios 功能点          
    - 网络请求千千万，api axios 把单例干     
    - 统一了vue react native app 三端的请求库     
    - 每个请求 域名 + 端口部分 没必要重复        
        可以配置到baseURL 中        
    - 为了切换请求域名的需要        
        http://localhost:3000         
    - 拦截器 interceptors.response.use()          
        解构好res.data 处理错误        
    interceptors.request.use()          
    - 登陆时，服务器会给我们一个授权码 token        
    - 我们每次请求时，需要手工带上        
        拦截器 request response      
        req.header 请求头 Authorization 授权信息

- 组件数据管理功能被剥夺              
    1. redux 管理数据更专业        
        - store store/index.js       
        - reducer 集合 交给 store         
        - combineReducers 提供 reducer      
        - 各个模块 文章 评论 用户模块 。。。
        - 每个模块都是一个reducer 函数          
        - reducer 还可以多次运行       
        - dispatch 一个他想要的action       
        - 页面会自动更新           
        - connect mapStateToProps 获取状态        
            mapDispatchToProps 触发状态的改变

    2. mapStateToProps 状态读操作
    3. mapDispatchToProps 写操作           
        - 状态不可直接修改 redux 起因        
        - 要有法可依      
        - dispatch getRankList 异步action redux-thunk 支持               
            data dispatch(changeRankList) 同步action           
        - dispatch({type: '',data: }) 在action 里
        - reducer 根据 type 重新计算     
        - 状态发生改变，应用了状态的地方MVVM

- 小型项目没必要用redux        
    如果你在想要不要用redux，那就不要用           
    - 如果足够复杂，模块化reducer 迁移到pages 相应模块下          
        pages/store 新的目录架构
    - store 中央 src/store + 模块化 @pages/store{n}

- 修改状态有固定流程      
    - 属于actionCreators            
    - 一般标配两个action ，一个同步的，一个异步的        
    - dispatch 从能触发          
    - action 对象固定格式 {type: }       
    - type 方便我们把action 为什么要改变记录下来          
    - 从init -> 任何 action 状态，都是可被追溯的               
    - 都是为了数据管理的严谨性

- styled-components        
    - 页面播放歌曲动态高度，props 传参          
        ${ 函数 } 函数的返回值就是这个占位          
        页面的播放状态         

- 移动端一般必须 better-scroll 生成的 scroll 组件        
    1. 滚动体验更好           
    2. 下拉刷新，上拉加载更多           
    3. 使用神三元封装的Scroll 组件          
    4. 移动端加载更多的标配         

- 数据管理跨页面级别的组件         
    redux 可以用来共享数据，本质            
    父子组件间共享，好搞           
    爷孙  周围的人共享 难搞 redux connect 一下          
    redux 可以跨页面级别，跨层级         

- redux 架构思路          
    1. 数据管理和组件，在有了redux 后，是平级关系           
        /pages  /store            
    2. 模块化数据管理，每个模块reducer + action 下放到页面路由模块中，方便管理           
    3. 每个模块都提供index.js 灵魂，所有的reducer ，action ，constants 都一起 export 清单文件

- react 组件渲染原理         
    1. 挂载         
    2. 当状态更新时，         
        MVVM， JSX 从头到尾部 重新编译          
    3. recommend 中，多个重要子组件 Slider 等       
    4. 给相对独立，组件加memo ，只要外界给他的props 没有变，则不会重新编译           
    5. 热更新 页面局部更新         

- memo 组件性能优化        
    1. 子组件       
    2. 父组件数据复杂，多项改变状态的地方         
    3. 父组件的改变，没有影响到子组件(props 未变，没有props)         
    4. 组件外面都加memo        

- styled-components 原则         
    1. 最外层容器 styled-components 接管          
        叫 Wrapper || Container 都行            
    2. List + ListItem         

- 图片延迟加载       
    1. react-lazyload 声明式组件 LazyLoad + placeholder         
        包住 原来的图片           
    2. Scroll onScroll react-lazyload 去 forceCheck


## 复杂组件业务分析           
    1. 这个阶段我们要刻意练习复杂组件          
        搜索         
        登录         
    2. redux 的设计思路          
        但凡有api 请求的肯定redux 了            
        跨模块共享状态没问题       
    3. 热词       
        建议           

- 三元react 风格        
    1. 命名风格          
        api 请求 getXXXRequest           
        页面级别组件中 getXXXDispatch          
        action 异步 getXXX          
        action 同步 changeXXX         
        actionType SET_XXX_XXX          
    2. react 流程风格        
        - 分析页面，看透业务，网络请求 和状态 XHR       
        - mapStateToProps 需要哪些状态         
        - store 模块 defaultState         
        - reducer case 修改         
        - constants 写完了      
        - actionCreators        
        - api 填写          

- CSSTransition 页面交互组件          
    1. 给页面的路由切换带来动画效果      
    2. 来自react-transition-group     
    3. in + 私有的useState(show)       
        初始时 show false 内存          
        useEffect mounted 浏览器上 show true           
    4. className fly            
    5. fly-enter 先立马上      
        opacity: 0            
        translate: transform(100%, 0, 0)           
        一小会儿 因为transition 需要 transition: all 0.3s             
        opacity: 1           
        translate: transform(0%, 0, 0)          
    6. fly-exit        
        fly-exit-active         
    7. transform-origin          
    8. GPU 加速             