import { Context } from 'koa';
import config from '../configs';
import WeatherService from './service';

const {
    max_number: MAX
} = config

export default () => {

    const service = new WeatherService();

    const getWeatherInfo = async (ctx: Context): Promise<void> => {
        console.log("oi");
        const { max } = ctx.request.query;
        ctx.oK();
    }

    const getWeatherInfoByCity = async (ctx: Context): Promise<void> => {
        const { city } =  ctx.params;
        ctx.oK(await service.getWeatherByCity(city));
    }

    return {
        getWeatherInfo,
        getWeatherInfoByCity
    }
}
