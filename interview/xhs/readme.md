<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-31 13:54:52
 * @LastEditTime: 2022-09-02 16:17:15
-->
- 组件通信            
    - 以函数式组件为讨论，使用hooks来实现             
    1. 利用 props 实现组件通信           
        - 父子组件通信           
            1. 父组件负责请求和处理数据             
            2. 子组件没有自己的状态，主要负责展示数据，和调用父组件修改数据的方法               
            3. 数据的改变发生在父组件里，父组件数据改变后，子组件重新渲染              
            [state, setState] = useState()           
        - 兄弟组件间通信，通过父组件作为桥梁，任然用的是props            
    2. createContext + useContext 跨级传递共享 + 家族              
        组件家族枝繁叶茂的时候，props力不从心           
        
- 301 302 303 307 309 redirect             
    3XX 重定向             
    301 Moved Permanently           
    请求的资源 URI             
    302 Moved Temporarily  307 Temporary Redirect             
    客户端任然使用原有URI            
    303 See Other            
        登录完后，浏览器到另一个欢迎页面              
    - 临时，永久           
    - 允许的方法(Method)             
    - 资源的访问             

    304 Not Modified            
        协商缓存           
        最小是 1s 可能不精确 Last-Modified/If-Modified-Since，匹配 Response Header 的 Last-Modified 与 Request Header 的 If-Modified-Since 是否一致            
        HTTP/1.1 有 ETag 根据文件是否修改来进行判断 Etag/If-None-Match，匹配 Response Header 的 Etag 与 Request Header 的 If-None-Match 是否一致                

- 强缓存和协商缓存的区别                
    - 强缓存，如果缓存资源有效，则直接使用缓存资源，不必向服务器发送请求              
        开启方式              
        Expires 不精确  浏览器的时间可能不一样            
        HTTP/1.1 Cache-Control 更精准的时间管理 max-age            
            - public 可以被任何资源缓存           
            - private 只能被浏览器缓存               
            - no-cache 先和浏览器确认资源是否发生了改变，没有强缓存，会有协商缓存             
            - no-store 禁止任何缓存          
            - max-age          

- 如果命中了强制缓存，我们无需发起新的请求，直接使用缓存内容，
    如果没有命中强制缓存，如果设置了协商缓存，协商缓存就会发生作用              
    - 命中协商缓存的条件  max-age=xxx 过期              
    no-cache  304            

- 使用浏览器缓存有什么优点              
    - 加快了客户端网页的加载速度              
    - 减少了多余的网络数据请求              
    - 服务器端减少了负担，提高了网站性能             

- 为什么需要浏览器缓存？            
    主要针对的是前端的静态资源(js css image)，最好的效果是，在发起请求后，拉取相应的静态资源，并保存到本地              
    如果服务器的静态资源没有更新，那么在下次请求时，直接本地读取，更新了，再次请求时，就到服务器去拉取资源，并保存到本地              
    大大的减少了请求次数，提高了网站性能(两端) cdn 内容分发系统            
    https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg  cdn 服务器             
    - 静态资源 static assets 根本不放在核心服务器上(数据库，用户) 前端写的代码会单独部署             
    - 一圈一圈的节点            
    - api 三个 3亿 1台服务器   负载均衡  nginx             
        不是真正的服务器 api.baidu.com -> dns 解析           
        负载均衡nginx 服务器上 管理所有的服务器矩阵  负载均衡算法 谁忙谁闲              
        1万台 服务器 云服务器动态分配服务器资源(物理服务器)              