# 电商界面开发

- html css js 位置，意义？
    1. html + css 完成静态页面的显示 越快越好     
    css 放到head html + css 允许 并行 下载和执行    
    - html html DOM树
    - 下载 css    
    css 不会阻塞html 继续下载，css 放到jbken上面 head     
    html + css 排版好 可看的    
    t = t1 + t2     
    t = Math.max(t1, t2)  
    2. js 放到尾部来
    下载的过程，阻塞html的下载     
    js 下载并执行完后 才会恢复html下载     
    t = Math.max(t1, t2) + t3      
    js 执行 后台

- defer
    1. 异步 下载html ， 不会影响到后续DOM的渲染
    2. 多个script defer a.js b.js c.js  
        文件的大小，下载的速度和标签的顺序不一样      
        js 文件下载后执行     
        script 立即执行，放在head ，下载时间 + 执行时间 = 拖慢首屏静态页面显示时间      
        defer 确保执行的顺序 和标签的顺序一致
    3. defer脚本会在文档渲染完毕后，DOMContentLoaded 事件调用前执行      
    DOMContentLoaded(html + css) 早于load(资源加载都ready)事件

- async(chrome新版 没有去执行) 
    - DOMContentLoaded之后运行
    - 谁先下载完谁执行

- js 事件 分不同的时期等级
    1. DOM0 级事件  onload onclick 事件里包含on
    2. DOM2 级事件 addEventListener('click', callback);



- 电商应用(页面开发)
    1. 界面能力良好，原子级别(html标签+css排版)
    2. 组件(页面开发的思维提升，工具)
        - css 命名技巧
        - 用一堆的html+css 组成了一个组件，一个展示功能和能力的集合，复用
        - 有了框架提供了这些组件的话 70%的工作不用做了
    3. 做项目
        - 调研weui 移动端最nb的ui框架
        - 界面能力丰富 业务



- 引入weui框架(框架业务)，加速且方便开发，组件开箱即用
- 打造项目可复用的组件
- 通用业务样式 特定项目 可能跨组件 或样式功能的     
    .bh_green     
    .f_sm {font-size: 12px;} 小号字体     
    .fr {float: right;}

- 70% 框架 30% 业务代码

- 图标字体库
    1. 每个项目都有的，引入图标
    2. 图标也是一种字体    
        font-family:
    3. 在默认设置之外，引入一个图标字体
        iconfont     
        - @font-face 引入 字体资源
    4. .icon 元素的地方，使用这种字体
    5. 使用编码去查找特定文字符号     
        .icon-109:before{
            content:'\e667';
        }

- 组件化思维是良好的编程习惯
    