const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js')

const comment = ctx => {
    console.log(ctx.request.uid,'comment,-------------------------');
    // ctx.request.body?
    // ctx.request.header
    // const authorization = ctx.header.authorization || '';
    // // ctx.body = authorization;
    // console.log(jwt.verify(authorization,config.secret));
    ctx.body = '1111'
};
module.exports = {
    comment,
};
