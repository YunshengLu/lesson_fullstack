// api 后端服务的单点入口文件 src/main.tsx
const Koa = require('koa'); // http server
const router = require('koa-router')(); // koa 路由中间件
const app = new Koa();
const crossDomain = require('./middleware/cross-domain')

//  /videos get   [{}]
router.get('/getVideos',ctx => {
    const videos = [{
        id: 1,
        name: '日本沙雕网友看完⚡领 导 讲 话⚡等视频后学会说废话',
        pic: 'https://i0.hdslb.com/bfs/archive/4aad2a38c0cad14aceaf0e966654cf4f42474411.jpg@672w_378h_1c.webp'
    },{
        id: 2,
        name: '日本沙雕网友看完⚡领 导 讲 话⚡等视频后学会说废话',
        pic: 'https://i0.hdslb.com/bfs/archive/4aad2a38c0cad14aceaf0e966654cf4f42474411.jpg@672w_378h_1c.webp'
    },{
        id: 3,
        name: '日本沙雕网友看完⚡领 导 讲 话⚡等视频后学会说废话',
        pic: 'https://i0.hdslb.com/bfs/archive/4aad2a38c0cad14aceaf0e966654cf4f42474411.jpg@672w_378h_1c.webp'
    },]
    ctx.body = videos
})

router.get('/banners',ctx => {
    const banners = [{

    }]
    ctx.body = banners
})

app.use(crossDomain)
app.use(router.routes())

// ctx req 用户请求 + 中间件{n个} + res 响应结果 
// 中间件函数
app.use((ctx) => {
    ctx.body = 'hello world'
})

app.listen(3300)