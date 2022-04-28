# The Good Parts

## 对象

### js 数据类型

    - 简单类型
        1. 数值类型 number    js 只有数值类型，不适合做数据计算
                - 处理小数不够精确
                    0.1 + 0.2 == 0.3 //false
        2. 字符串类型 String
        3. undefined
            - js是弱类型的，声明变量可以不指定类型
            - js变量类型由值决定，是可变的
                == 值相等就true  === 恒等 值相等外，类型也要相等才true
            - 变量声明之后，赋值之前，类型就是undefined
        4. 布尔类型
            - boolean true | false
        5. null

    - 复杂数据类型
        Object

### js 语言关键字

    let 变量
    const 常量
    typeof 获得变量或常量的数据类型
