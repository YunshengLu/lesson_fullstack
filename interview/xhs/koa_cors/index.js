/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-09-02 11:41:12
 * @LastEditTime: 2022-09-02 21:13:36
 */
const Koa = require('koa');
const cors = require('koa2-cors');
const app = new Koa();

app.use(cors());

app.use(async (ctx, next) => {
    ctx.body = {
        data: '123',
    };
});

app.listen(3000);