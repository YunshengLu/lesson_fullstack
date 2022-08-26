<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-26 10:17:21
 * @LastEditTime: 2022-08-26 11:25:44
-->
- 洋葱模型             
    1. node http 模块              
        请求 响应            
        http.createServer((req, res) => {
            if (req.url == '') {
                if (post) {
                    badyParser
                }
            } else {
                
            }
        })
        - 用户请求校验 解析              
        - 会话            
        - post bodyparser             
        - 链接数据库              
        - 业务处理            
        - 取数据            
        - 渲染html 模板或返回json 数据             
        ......  有序的组织一些函数(中间件)，分工明确的把http 服务做完，node 中间件机制             

- 中间件的执行策略引入了洋葱模型            
    1. 特定的中间件执行特定的服务，可以给ctx 加点东西             
        ctx.session              
        ctx.user           
    2. next 向下传递              
        ctx.body 完成或提前完成应用的响应           
    3. 如果最后一个还没结束呢？                   
        洋葱模型 回归执行中间件           
    4. 回退到最初的第一个中间件结束          