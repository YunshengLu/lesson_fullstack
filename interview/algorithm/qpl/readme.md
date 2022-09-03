<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-30 14:03:00
 * @LastEditTime: 2022-08-30 14:19:41
-->
- 全排列            
    递归  树             

    - '重复'递归式 '自顶向下' root           
    - 出口 退出条件 return            
    - 分支 树形结构            

字符串 abc 输出字符串所有排列的可能               
abc
acb
bac
bca
cab
cba
str len = str.length         
随机且不重复的将 每个位置 决定放哪个元素？             
        root(null)  回退             
    a       b       c          
  b   c   a    c  a    b          
  c   b   c    a  b    a    退出条件           