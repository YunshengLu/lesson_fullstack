- react 单页应用 + 数据管理  全家桶开发
- 商城 网易云音乐  用户端App            
    博客后台         
- 权限校验Blog Admin  后台管理系统           
    1. login 管理员Admin  小编  一般工作人员       
    2. antd 开发很快 PC 国际化流行的专业框架 特别适合做后台管理系统                  
        antd-mobile 移动用户端            
    3. 新手？ 工作人员用的，用户量不大  并发， 性能优化 没那么大的要求          
        好用，方便           
        出些错，是没那么严重，            
- vite 升级到 v3        
- antd v4        
- canvas 背景墙  数据可视化          
- 细节化处理redux 性能          
    开发阶段和生产阶段的需求是不一样的            
    开发阶段 开发便利 代码方便调试， 有注释， 不要压缩 sourcemap            
    上线  性能  压缩            
    npm run dev               
    npm run build             
    环境变量的概念             
    cross-env 跨操作系统设置 NODE_ENV='development' 工程化 process.env.NODE_ENV         

- 登录            
    1. 表单 提交 useState  username password 格式正确           
    2. dispatch 异步的action           
    3. api            
    4. reducer case 计算            
    5. state.login true


- canvas 绘图功能           
    1. html5 提供的绘图            
        - 游戏         
        - 数据可视化           
    2. document.createElement('canvas')
    3. width height window.innerWidth | innerHeight
    4. 绘图的 api ctx = canvas.getContext('2d')
    5. ctx.fillStyle           
        ctx.beginPath         
        ctx.closePath           
        ctx.fillRect           
        ctx.fill             
    6. window.requestAnimationFrame(drawFrame) 动画