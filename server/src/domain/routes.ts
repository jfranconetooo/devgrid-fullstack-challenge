import Router from "koa-router";
import { Context, DefaultState } from 'koa';
import { ctrlFactory } from './';

const ctrl = ctrlFactory();

export default (router: Router<DefaultState, Context>): void => {
    router.get('/', (ctx: Context) => ctx.oK(`Server is running!`));
}
