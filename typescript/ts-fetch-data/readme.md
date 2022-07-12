- any 不对类型做约束，可以是任何类型    
- keyof Color -> Color 中的某一个key(值的范围 enum)

- typescript 有何魅力？           
    1. 增强语言能力           
        interface 泛型 type keyof          
        强类型          
    2. 编译能力             
        边写边编译          
    3. 代码建议         
    4. 开发更快           
        多写了代码 让代码少出bug         
        减少了调试，改bug 的时间             
    5. 有很多现成的类型定义文件 @types/React ...          

- typescript 怎么取巧？        
    1. any        
    2. 快速修复一下         

- api tyscript 比较复杂            
    1. api 使命是返回数据的，符合模型的定义              
        根据table 列来定义          
    2. 每个模块都会对应一个table moedl/ 模型定义文件 interface         
    3. 异步，返回的是 Promise         
        :Promise<MemberEntity>          
        每处Promise 都得写清楚          

- 封装了一个hook 函数         
    1. 每一个hook 都有使命 函数功能封装         
    2. useEffect useState react 内置的          
    3. useNavigate react-router-dom 内置的          
    4. 封装了一个useMemberCollection 的hook
    5. 状态声明(useState) 和接口请求 封装到内部去了