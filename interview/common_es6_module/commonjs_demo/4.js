/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-09-05 15:36:37
 * @LastEditTime: 2022-09-05 15:42:34
 */
// 依赖的引入退后 用函数来封装
// 动态加载
let lists = ['./1.js', './2.js'];
lists.forEach(url => require(url)); // 不会引入

require(lists[0]);