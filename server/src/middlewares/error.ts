import { Context, Next } from 'koa';

export default () => async (ctx: Context, next: Next): Promise<void> => {
    try {
        await next();
    } catch (error) {
        if(error.response) {
            ctx.throw(error.response.status, error.message);
        } else ctx.throw(500, error);
      }  
}
