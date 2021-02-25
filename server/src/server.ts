import { Context } from 'koa';
import app from './app';
import config from './configs';

const {
    port: PORT,
    env: NODE_ENV
} = config.api;

app.listen(PORT, () => {
    console.log(`Server listing on ${PORT} in ${NODE_ENV} environment!`);
});

//* centralized error handling:

app.on('error', (err, ctx: Context) => {
    console.error(err);
    return ctx;
});

process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error);
});
