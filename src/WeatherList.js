import React, {Component} from 'react';
import WeatherBoard from './WeatherBoard';

export default class WeatherList extends Component {

    render() {
        const {weathers} = this.props;
        return (
            weathers.map((weather, index) =>
                (
                    <WeatherBoard
                        key={weather.id}
                        item={weather}
                    />
                )
            )
        )
    }
}
