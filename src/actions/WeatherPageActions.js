import {dispatchAsyncBound} from '../Utils';

export class WeatherPageActions {
    constructor(api, dispatch) {
        this.api = api;
        this.dispatch = dispatch;
    }

    addWeatherCity(location){
        const getWathers = () => this.api.getWeathers(location);
        return dispatchAsyncBound(
            this.dispatch,
            'WEATHERS',
            getWathers
        )
    }
}