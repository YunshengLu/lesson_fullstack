const Koa = require('koa');
const router = require('koa-router')();
const path = require('path');
const cors = require('koa-cors');
const multer = require('koa-multer');
// const bodyParser =  require('koa-bodyparser');
// const koaBody = require('koa-body');
const app = new Koa();
// 文件上传 form-data
// app.use(
//     koaBody({
//         multipart: true,
//     })
// );
// app.use(bodyParser());
app.use(cors());
// 持久化
let storage = multer.diskStorage({
    destination: path.resolve('upload'),
    filename: (ctx, file, cb) => {
        cb(null, file.originalname);
    },
});
// 上传文件 中间件
let upload = multer({
    storage,
});

router.post('/upload', upload.single('file'), async ctx => {
    console.log(ctx.request, '++++++++');
    ctx.body = ctx.request.body;
});
app.use(router.routes(), router.allowedMethods());
app.listen(8080);
