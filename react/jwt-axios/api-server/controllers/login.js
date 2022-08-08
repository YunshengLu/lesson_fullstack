// json web token
const jwt = require('jsonwebtoken')
const config = require('../config/auth.config.js')

const login = (ctx) => {
    const { username, password } = ctx.request.body
    if (username === 'admin' && password === '123456') {
        // 给request 2. 颁发一个凭证
        // 1. session 会话对象 JSON cookie sid  每次请求都带上sid
        // session -> 解析 cookie  sid
        const token = jwt.sign({uid: 123456}, config.secret, {
            expiresIn: 86400
        }) // 签发一个token
        console.log(token);
        ctx.body = {
            code: 0,
            token,
            message: '登录成功'
        }
    } else {
        ctx.body = {
            code: -1,
            message: '登录失败'
        }
    }
    console.log(ctx.request.body,'########');
    // ctx.body = '登录成功'
}

module.exports = {
    login
}