/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-29 15:51:03
 * @LastEditTime: 2022-08-29 16:04:11
 */
// 立即执行函数
// 在模块化之前,js 通过闭包实现模块化
var myModule = (function (window, undefined) {
    let name = 'echo'; // 没有变量污染
    let a = 1;
    function getName() {
        return name;
    }
    function setName(newName) {
        name = newName;
    }
    return {
        name,
        getName,
        setName,
    };
})(window);
