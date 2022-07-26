// ts 表面上看类型检测 多写代码  不自由
// 更好的自由，代码建议
var flag = ['a', 'b', 'c'];
console.log(flag.map(function (item) { return item.toUpperCase(); }));
// 元组类型
var flag1 = ['hello', 1];
// 枚举类型 
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["PINK"] = 1] = "PINK";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var color = Color.BLUE; // red, pink, blue
// 1. 全栈项目
// 2. react 源码
// 3. 算法
// 4. 面试题
var sym1 = Symbol('hello');
var sym2 = Symbol('hello');
console.log(Symbol('hello') === Symbol('hello'));
