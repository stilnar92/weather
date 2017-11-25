import {OPEN_WEATHER_API_KEY} from '../../Core/Constants'
import {GET} from '../../Utils';
const REAL_API = true;
const MOCK_URL = 'http://localhost:3002/weathers';


export class WeathersPageService {

    getWeathers(area) {
        return REAL_API ? GET(`https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${OPEN_WEATHER_API_KEY}&units=metric`):
            GET(MOCK_URL)
    }
}