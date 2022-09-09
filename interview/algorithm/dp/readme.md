<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-29 10:20:24
 * @LastEditTime: 2022-08-29 16:26:28
-->
- 动态规划？             
    算法思想，快排用的什么算法思想 分治                   
    算法思想？ 公式，或者说是一种策略，太抽象，具象，用情景和刷题                 
        - 一个解题的套路，非常好用                             

- 爬楼梯问题             
    - 要求你给出达成某个目的的解法个数 最值               
    - 不要求给出每一种解法相应的具体路径              
    - 动态规划 背 状态转移方程
    1. 递归            
        - 重复 细化给“类似”的子问题            
        - 退出条件            
            f(1) = 1         
            f(2) = 2            
    核心？ 背            
        - 倒着分析问题               
        1. 定位到问题的终点             
        2. 站在终点这个视角，思考后退的可能性             
        
    f(n) = 走到第n个台阶这个目标对应的路径树 倒着              
    一次只能后退一步，或者两步           
    f(n) = f(n-1) + f(n-2) 关系 表达式              
    递归，关系用树形解构表示               
    
    2. 记忆化搜索            
        简单变量 数组          
        前端算法实现优化就可以了             
        在递归的过程中，不断的保存已经计算的结果，从而避免重复计算的手法               
        用空间换时间                
        
    3. 转化为动态规划                 
        从递归而来(比较符合人的思想)，得到了状态转义方程                
        f(n) = f(n-1) + f(n-2) 前提下           
        换一种思想 自底向上的视角 来解决这个问题，动态规划(倒车上山)               
        递归(自身函数来递归)用迭代(while条件 for 计算)来替换             

- 动态规划的分析技巧              
    1. '自底向上' + 迭代            
    2. 状态转移方程             
        - 树形思维模型将帮助我们更快速的定位到状态转移关系                            
        难点