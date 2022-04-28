# js
## talk in js

1. js 运行在浏览器代理中（url），宿主环境（windows 全局对象）
    - typeof windows   对象 生而知之
    - a b name 全局作用域
    - c 声明在函数中 函数 局部作用域

    ```js
        // 浏览器 上网代理 ， 运行页面时 js的宿主环境
        // 局部变量
        function func(){
            let c = 3;  //局部变量
        }

        // 全局变量
        // 变量名 地址的映射 属于运行环境的作用域
        let d; // undefined 没有值 类型未定义 空间起始地址有，空间大小未定义
        var a = 1; // var es5 及之前 js 变量常量声明的关键字
        const name = "234";
        let b = 2; // let const es6 2015 之后提供的声明变量常量的关键字
    ``` 

    - es6 let const 与 var  
        1. 相同点都是属于声明的作用域    
            可以直接用变量名来访问
        2. var 会自动挂载在windows上   
            - 其实是副作用 ， 不太对   
            - es6 之后尽量不要用 let 可以完全取代
        3. let const 不会挂载在windows对象上
        4. const 常量 值不可以修改  
            - 如果是简单数据类型， 值不能改变
            - 如果是复杂数据类型， 值可以变， 但是类型不能变