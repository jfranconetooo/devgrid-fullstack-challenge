import redis from 'redis';

export default (): redis.RedisClient => {
    const client: redis.RedisClient = redis.createClient();

    client.on("error", (error) => {
        console.error(error);
    });

    return client;
}