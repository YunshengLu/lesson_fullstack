/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-26 10:38:44
 * @LastEditTime: 2022-08-26 11:16:31
 */
const Koa = require('koa');
const app = new Koa();
// 中间件架构 + MVC 设计模式

// 按顺序罗列中间件，后端服务有工序
// ctx 上下文环境 引用式赋值
// next 下一项
app.use((ctx, next) => {
    console.log(1);
    // ctx.body = '你好';
    next();
    console.log(2);
});

app.use((ctx, next) => {
    console.log(3);
    // ctx.body = 'hello';
    next();
    console.log(4);
});

app.use((ctx, next) => {
    console.log(5);
    next();
    console.log(6);
});

app.listen(8080, () => {
    console.log('Server is starting...');
});
