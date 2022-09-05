/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-05 15:43:54
 * @LastEditTime: 2022-09-05 15:52:42
 */
let num = 0;

module.exports = {
    num,
    add() {
        ++num;
        console.log('原来',num);
    }
}