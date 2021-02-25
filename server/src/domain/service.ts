import axios from 'axios';
import { RedisClient } from 'redis';
import config from '../configs';
import { redisConf } from '../configs';
import { promisify } from 'util';

const {
    max_number: MAX,
    open_weather_api_key: OWKEY,
    ttl: TTL
} = config

export default class WeatherService {
     request;
     redisClient: RedisClient;

     constructor() {
        this.request = axios.create({
            baseURL: 'https://api.openweathermap.org/data/2.5',
            timeout: 1000
        });
        this.redisClient = redisConf();
    }

    async getCachedWeathers(max_number: string = MAX as string) {

    }

    async getWeatherByCity(city: string) {
        const getAsync = promisify(this.redisClient.get).bind(this.redisClient);
        const setAsync = promisify(this.redisClient.setex).bind(this.redisClient);

        const result = await getAsync(city);
        if(!result) {
            try {
                const { data } = await this.request({
                    url: `/weather?q=${city}&appid=${OWKEY}`,
                    method: 'GET'
                });
                await setAsync(data.name, Number(TTL), JSON.stringify(data));
                return data;
            } catch (error) {
                console.log(error);
                throw error;
            }
        } 
        return JSON.parse(result);
    }
}