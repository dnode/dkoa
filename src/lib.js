'use strict';

const Koa = require('koa');

const app = new Koa();
app.listen(process.env.PORT);

module.exports = app;
