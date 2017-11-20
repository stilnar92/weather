import {OPEN_WEATHER_API_KEY} from './Constants'
import {GET} from './Utils';
const REAL_API = true;
const MOCK_URL = 'http://localhost:3002/weathers';


export class WeatherPageService {

    getWeathers({latitude, longitude}) {
        return !REAL_API ? GET(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`):
            GET(MOCK_URL)
    }
}