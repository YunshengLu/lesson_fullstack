<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-31 17:31:58
 * @LastEditTime: 2022-08-31 17:36:34
-->
1. 接收一个Promise 实例的数组作为参数
2. 这个方法返回一个新的promise 对象 then         
3. 遍历传入的参数，如果不是promise, Promise.resolve 包一层，使其一定是一个promise 对象            
4. 所有promise resolve 成功，才算成功，返回值数组与参数数组顺序一致，数组下标设置resolve 值            
5. 只要有一个失败，catch 