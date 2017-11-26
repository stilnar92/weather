import {dispatchAsyncBound} from '../../../Core/Utils';

export class WeathersPageActions {
    constructor(api, dispatch) {
        this.api = api;
        this.dispatch = dispatch;
    }

    addWeather = (area) => {
        const getWeathers = () => this.api.getWeathers(area);
        return dispatchAsyncBound(
            this.dispatch,
            'ADD_WEATHER',
            getWeathers
        )
    }

    deleteWeather = (area) => {
        this.dispatch(
            {
                type: 'DELETE_WEATHER',
                payload: area
            }
        )
    }

    deleteAll() {
        this.dispatch(
            {
                type: 'DELETE_ALL',
            }
        )
    }
}
