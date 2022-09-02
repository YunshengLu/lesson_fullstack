<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-02 10:27:05
 * @LastEditTime: 2022-09-02 11:57:18
-->
- flex 不用flex: 1 比例化或主元素             
    同时匹配width flex-shrink flex-grow             
    精细化的分配收缩的比例             

    父元素宽度不够 子元素收缩一下 flex-shrink               
    父元素宽度富裕 子元素膨胀一下 flex-grow                
    flex-basis 基本宽度             
    
    flex: 1              
    需要收缩的宽度是不变的 150            
    shrink 比例的计算          
    总收缩 300*1 + 150*2 + 200*3             
    每个元素的比例 300/1200 = 0.25            
    150*2/1200 = 0.25           
    200*3/1200 = 0.5            

    300 - 0.25*150 = 262.5

- flex-order 可以为负值 越小越在前面               

- koa-cors 能跨域的原理是什么？             
    - 当发生跨域的时候，如果没有这个cors 那么就会被同源策略限制            
    - Access-Control-Allow-Origin             
        Access-Control-Allow-Method            
    - 返回响应头Access-Control-Allow-Origin             
    - koa-cors 可以origin method 的配置                 
        如果为空，返回请求的域名作为允许              