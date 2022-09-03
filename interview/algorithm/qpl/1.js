/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-30 14:24:58
 * @LastEditTime: 2022-08-30 14:37:33
 */
function fullpermutate(str) {
    var result = [];
    // 退出条件
    if (str.length > 1) {
        for (var i = 0; i < str.length; i++) {
            var left = str[i];
            var rest = str.slice(0, i) + str.slice(i + 1, str.length);
            var preResult = fullpermutate(rest)
            for (var j = 0; j < preResult.length; j++) {
                var tmp = left + preResult[j];
                result.push(tmp);
            }
        }
    } else if (str.length == 1) { // 退出条件
        result.push(str);
    }
    return result;
}

console.log(fullpermutate('abc'));