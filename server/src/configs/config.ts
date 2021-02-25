import dotenv from 'dotenv';
dotenv.config();

export default {
    node_env: process.env.NODE_ENV,
    api: {
        env: process.env.NODE_ENV,
        port: process.env.API_PORT,
        host: process.env.API_HOST
    },
    max_number: process.env.MAX_NUMBER,
    ttl: process.env.TTL,
    open_weather_api_key: process.env.OPEN_WEATHER_API_KEY
}
