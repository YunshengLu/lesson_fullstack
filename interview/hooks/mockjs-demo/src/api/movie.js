import Mock, { Random } from 'mockjs';
// @cname 伪造随机数据
// 拦截
Mock.mock('init_movie', 'get', {
    'data|100': [{
        'key|+1': 1, // 自增
        'title': Random.csentence(10, 13),
        'content|1': Random.paragraph(),
        'name': '@name',
        'email': '@email',
        'sex|1': ['男', '女'],
        'sex|1': Random.zip(),
        'avatar': Random.image('200x100', '#FF6600'),
        'province': Random.province(),
        'city': Random.city(),
        'county': Random.county(),
    }]
})