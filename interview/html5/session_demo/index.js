const Koa = require('koa');
const session = require('koa-session');
const app = new Koa();
app.keys = ['1234564lys65544ysl'];
const CONFIG = {
    key: 'koa.sess',
    maxAge: 1000 * 1000,
    autoCommit: true, // 请求头
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: true,
    secure: false, /* https */
    sameSite: null,
}
app.use(session(CONFIG, app)); // 启动挂载sessoin 中间件
// node 开发模式？ MVC，中间件服务 req middlewares res
app.use(ctx => {
    if (ctx.path === '/login') {
        // controller username password
        ctx.session.isLogged = true;
        // session_id 唯一的去标记当前用户 用户状态就有了
        // 基于cookie ，自动的去新建了cookie session_id ,res 用户端也有了
        // cookie ， 每次http 请求都带上
        // 再次来到服务器，session 中间件， 在router 中间件之前就加载的？
        // cookie session_id session key value 取出我的的会话对象
    } else if (ctx.path === '/logout') {
        ctx.session.isLogged = false;
    }
    // 统计访问网站的次数
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.body = `${n} views ${ctx.session.isLogged}`
    // ctx.body = ctx.session.isLogged;
})
app.listen(1314);