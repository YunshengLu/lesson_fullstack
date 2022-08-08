const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');

const auth = (ctx, next) => {
    console.log('-----------------');
    const authorization = ctx.header.authorization || '';
    // ctx.body = authorization;
    const jsonObj = jwt.verify(authorization, config.secret);
    ctx.request.uid = jsonObj.uid;
    next();
};

module.exports = auth;
