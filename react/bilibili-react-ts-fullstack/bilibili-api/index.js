// api 后端服务的单点入口文件 src/main.tsx
const Koa = require('koa'); // http server
const router = require('koa-router')(); // koa 路由中间件
const cors = require('koa-cors')
const app = new Koa();
const {
    fetchSuggest,
    fetchHotword,
    fetchSearchData,
} = require('./api')
// const crossDomain = require('./middleware/cross-domain') // 支持跨域

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

// 添加了一个路由中间件
// ctx 上下文对象 = req + res
router.get("/search/suggest", async (ctx, next) => {
    // ctx.query 请求对象中的查询参数
    // ？a=1&b=2 查询参数  设置成{a:1, b:2}
    const w = encodeURI(ctx.query.w); // 编码
    // ctx.body = w
    // console.log(w, '------------')
    try{
        const data = await fetchSuggest(w);
        // console.log(data);
        // api 前后端交互的数据格式是JSON
        let resData = {
            code: "1", // 成功响应 200
            msg: "success" // 成功 | 失败原因
        }
        if (data.code === 0) {
            resData.data = data.result;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        // ctx.set('content-type', 'json');
        ctx.body = resData
    } catch(e) {
        // 处理错误
        next(e)
    } 
})
// 接口服务
router.get("/search/hotword",async (ctx, next) => {
    try{
        const data = await fetchHotword(); // rpc 调用
        let resData = {
            code: "1", // 成功响应 200
            msg: "success" // 成功 | 失败原因
        }
        if (data.code === 0) {
            resData.data = data.list;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        // ctx.set('content-type', 'json');
        ctx.body = resData
    }catch(e){
        next(e)
    }
})

router.get("/search", async (ctx, next) => {
    const w = encodeURI(ctx.query.keyword);
    try{
        const data = await fetchSearchData(w);
        let resData = {
            code: "1", // 成功响应 200
            msg: "success" // 成功 | 失败原因
        }
        if (data.code === 0) {
            resData.data = data.data;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        ctx.body = resData
    } catch(e) {
        // 处理错误
        next(e)
    } 
})

app.use(cors())
// app.use(crossDomain)
app.use(router.routes())

// ctx req 用户请求 + 中间件{n个} + res 响应结果 
// 中间件函数
app.use((ctx) => {
    ctx.body = 'hello world'
})

app.listen(3300)