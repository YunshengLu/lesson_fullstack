"use strict";

var a = 1;
var s = Symbol();
{
  var b = 2;
}

var func = function func() {
  return "aaa";
}; // var a = 1;
// es6 ie9以前  -ms  es6  ->  es5
// 大胆的使用新语法，转义后，兼容良好
// 工程化(node)  文件模块化合并，es6 转 es5 工具  babel
