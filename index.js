#!/usr/bin/env node
const router = require('koa-router')();
const koaBody = require('koa-body');
const Koa = require('koa');
const app = new Koa();

app.use(koaBody());

// TODO delete after some time
const conferenceToId = {};

function generateNewId() {
    // TODO Random ID
    // TODO check if already present
}

router.get('/conferenceMapper', async ctx => {
    // e.g. /conferenceMapper?conference=newmeeting1234@conference.meet.domain.com
    const conference = ctx.request.query.conference;
    const id = ctx.request.query.conference;
});

app.use(router.routes());

if (!module.parent) app.listen(37719);