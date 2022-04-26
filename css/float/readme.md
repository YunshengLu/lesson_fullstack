# es6 新的数据类型

    大数据 数值是有表示范围的     
    
js 简单数据类型     
    String boolean number null undefined bigint 

- 大数据时代，es6 推出了新的简单数据类型，BigInt    
- 适合大叔相加减，准确，不适合/ ，舍去小数
- 两种新建方式 1n BingInt("1")
- typeof bigint
- 不支持 隐式类型转换(+) 可以使用强制类型转换 BigInt()
- number 和 BigInt 相加，报错，不能混  强制类型转换



img 设置float ，img脱离了文档流居于左侧
- 浮动元素不只会影响自己(脱离文档流)，他会影响周围的元素对齐(左|右)进行环绕
- block (p 兄弟 不受影响) img 脱离了文档流，所以block 无视img，
- 让inline 元素 (文本，element document.createElement('p') document.createTextNode('fsfrfvs3436')) 围绕float 元素来实现浮动布局
- 文字环绕效果是float 典型的应用


## float 元素特性

1. 块级框     
    不管是行内还是块级，如果被设置了浮动，浮动元素会生成一个块级框(盒子能力 block inline-block)      

    一旦浮动，立即会像inline元素一样产生环绕，宽度会跟随着内容适应(inline) 多列布局(菜单)

2. 高度塌陷
    block 宽度是100%     
    高度呢？是内容，文档流加高的 计算好来 父容器有多高？      
    浮动元素 不参加父元素的高度计算     
    