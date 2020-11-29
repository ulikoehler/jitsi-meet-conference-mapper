#!/usr/bin/env node
const router = require('koa-router')();
const koaBody = require('koa-body');
const Koa = require('koa');
const app = new Koa();

app.use(koaBody());

router.get('/', async ctx => {
    ctx.body = "Hello world";
});

app.use(router.routes());

if (!module.parent) app.listen(37719);