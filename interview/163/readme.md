<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-05 19:10:45
 * @LastEditTime: 2022-09-06 21:32:22
-->
- 块级元素block div p form hr table h1...h6 dl dt dd ul ol            
    - 独占一行，从上往下进行流体布局             
    - 可以设置宽高，默认父元素的100%              
    - 作为容器元素，遵循盒模型的所有规则              
- 行内元素inline a span label i strong b em            
    - 和其他元素在一行           
    - 元素的高度，宽度 及顶部和底部边距不能设置             
    - 元素的宽度为它包含的文字及图片的宽度，不能改变              
- 行内块级元素             
    input img             
    - 和其他元素在一行上          
    - 元素的高度、宽度及顶部和底部边距可以直接设置               
    - 有个bug           
        列布局            
            - inline-block bug           
                - 消灭换行符  html  标签首位相连            
                - 父元素 font-size 0 子元素自己设置           
            - flex           
            - float           
            - margin 负值          

- 行内元素变块级元素的方法              
    1. display  inline  ->  block  inline-block               
    2. float          
    3. flex           
    4. position fixed / absolute           

- css 盒模型          
    1. 由内到外            
        content | padding border | margin           

        content-box           
        border-box           
        - padding
            - 行内元素不会将水平padding 大小计算在盒模型内，块级元素padding 会           
            - 一些标签元素会内置padding 大小          
            - padding 不支持负值 增大点击区域            
        - border            

- float 导致父元素高度塌陷问题             
    原因 离开文档流           
    - 父元素 声明为BFC           
        overflow: hidden 性价比最高            
        flex.....           
    - 定死 父元素的高度             
        缺点 子元素不能撑起父元素                
    - 清楚浮动            
        1. clear: both;             
            结尾使用display: block 元素             
        2. 伪元素            

- 响应式方案有哪些？              
    - px 和视窗           
    - 百分比           
    - em           
    - rem         
    - 媒体查询          

- px css像素 物理像素           
    - 1px 是固定的？ 不是的            

- css 中的1px (css 像素) 由什么决定？            
    - css 像素 为web开发者提供，一个抽象单位              
    - 物理像素 之和硬件的密度相关             

- css 像素 如何转换为物理像素？ 等比例的显示               
- viewport            
    device-width  多变  PC  PAD  iphone/小米/华为....                
    设计稿是不变的  750px             
    
    DPR (Device pixel ratio) 设备像素比              
    1200 750              
    375 ？           
    1DPR = 物理像素/分辨率  750/1200            
    iphone 6 750/375 = 2px            
    
- 媒体查询              
    media query           

    @media screen and (max-width: 480px) {
        body {
            background-color: #fff;
        }
    }

- 502 与 504 的区别             
    5xx 服务器端错误              
    - 迟迟不响应  数据库  504 Gateway Timeout                   
        很多台数据库服务器？ 同步            
        中间件 数据库  timeout 配置          
    - java/node/php  等后端错误  502 Bad Gateway 网关               
        js 单线程  挂了就不得了              
        服务器是多线程，多核CPU 3300 (node 哪个模块 多核运行 cluster)             
        nginx  负载均衡还有代理             
        www.baidu.com  dns   ip              
        https 443              

- 类型               
    1. 深入理解JavaScript 的基本数据类型和引用数据类型               
        typeof Symbol()  'symbol'             
        typeof null  'object'           
        Object.prototype.toString.call()  引用类型  内置的子类 Date  Regexp            
        why? 有一个内置的内部属性[[Class]] Date             
        instanceof 自定义类型的实例化，原型关系                
        各有应用场景           

    2. 隐式类型转换 遵循强制类型转换原则           
        - String() 包装类              
            - 简单数据类型类型转换 比较和直觉            
            - Object 的子类型 toString 不一致            
                Object 类型进行toString          
                原型链上的 toString 方法             
                调用了对象上的toString()            
        - Number() 没有toString() 那么便利            
            - 对象在转number 之前，先转换为基础类型(可以是number 之外的基础类型)，
            再转化为number 类型，这个过程叫toPrimitive             
            1. ValueOf()              
            2. toString()              
            
- 隐式类型转换的套路 + (拼接)  == (值等，努力去类型转换)            
    1. 遵循强制类型转换的规则，              
        [] + {} String() Number()           
    2. x + y             
        if (type x === string || type y === string) return join(x, y)            
        if (type x == object && type ToPrimitive(x) === string) return join(x, y)               
        if (type y == object && type ToPrimitive(y) === string) return join(x, y) else return add(x, y)               

    - == 转换规则                
        == (input number) === ?                             
        1. 对于数字和字符串的抽象比较，字符串 ToNumber               
        2. 对于boolean 和其他类型，先将boolean ToNumber 比较            
        3. 对于对象和基础类型的比较，将对象ToPrimitive 比较             
        4. 对象之间的比较，引用的同一个对象true，否则false              