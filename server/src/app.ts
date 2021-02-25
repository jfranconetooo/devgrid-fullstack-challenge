import Koa, { DefaultState, Context } from 'koa';
import KoaRouter from 'koa-router';
import logger from 'koa-logger';
import cors from '@koa/cors';
import { routes } from './domain';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import { error } from './middlewares';
import koaResponse from 'koa-response2';

export default (() => {
    const app = new Koa();
    const router = new KoaRouter<DefaultState, Context>({ prefix: '/'});
    app.use(cors());
    app.use(logger());
    app.use(koaResponse());
    app.use(json());
    app.use(bodyParser());
    app.use(error())
    routes(router);
    app.use(router.routes());
    return app;
})();
