# es6
    1. let const var 区别
    2. 作用域{}
    3. for of
    4. 字符串模板
    5. Object.create()
        - 代替 传统的面向对象 Function + prototype  学习成本高


- 函数背后的底层实现有[call]和[constructor] 两部分，    
    就好像函数都有this一样   
    1. 以普通函数来运行的时候
        - this 指向全局 不是那么正确    
            this 没必要，在函数内可以访问到全局的变量
        - 启用了严格模式的话， undefined     
            js运行得更专业

    2. 对象方法来使用的话
        - this 指针，通过构造函数来完成

    3. 函数是箭头函数的话     
        简单 优雅 直率       
        - 只有call 没有 constructor
        - 没有this this 会是外层作用域里的this
        - 没有arguments
        - 没有prototype


- left变量名 = 值
    1. 赋值 值是简单数据类型的话
    2. 应用式赋值 值是复杂数据类型的话