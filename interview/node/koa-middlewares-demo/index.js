/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-26 10:38:44
 * @LastEditTime: 2022-08-26 11:51:12
 */
const Koa = require('koa');
const app = new Koa();
const axios = require('axios')
// 中间件架构 + MVC 设计模式

// 如何得知数据库查询，或rpc 调用花了多少时间
// 1. 计时中间件
// 2. 接口请求 独立的中间件
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const delta = new Date() - start;
    console.log (`请求耗时: ${delta} MS`);
    console.log('拿到上一次请求的结果：', ctx.state.baiduHTML);
})
app.use(async (ctx, next) => {
    ctx.state.baiduHTML = await axios.get('http://www.baidu.com');
})

app.listen(8080, () => {
    console.log('Server is starting...');
});
