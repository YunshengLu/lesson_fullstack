const router = require('koa-router')();
const rankingPartitions = require('../data/rankingPartitions');
const { 
    fetchRankingById 
} = require('../api');
// 向api 服务添加排行榜路由模块
// 排行榜菜单
router.get('/partitions', (ctx, next) => {
    const resData = {
        code: 0,
        message: '0',
        data: rankingPartitions,
    };
    ctx.body = resData;
});
// /ranking/1  params  query?
router.get('/:rId', async (ctx, next) => {
    const { rId } = ctx.params;
    try {
        // 分层 api | controller
        const data = await fetchRankingById(rId);
        // let resData = {
        //     code: '1',
        //     msg: 'success',
        // }
        // if(data.code == 0) {
        //     resData.data = data.data;
        // }
        ctx.body = data;
    } catch (err) {
        next(err);
    }
    // ctx.body = rId;
});

module.exports = router.routes();
