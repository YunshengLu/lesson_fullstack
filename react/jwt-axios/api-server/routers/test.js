const controller = require('../controllers/test');
const auth = require('../middlewares/auth')
const router = require('koa-router')();
// 发表评论需要权限 accessToken
// auth 中间件 抽离鉴权功能，middlewares
// 1. accesstoken -> json uid
// 2. 任务继续交给 comment 控制器层 next
// 3. 拿到uid
router.post('/comment', auth ,controller.comment);
module.exports = router.routes();
