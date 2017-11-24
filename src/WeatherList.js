import React, {Component} from 'react';
import WeatherBoard from './WeatherBoard';

export default class WeatherList extends Component {

    render() {
        const {weathers, deleteWeather} = this.props;
        return (
            <main className="main">
                {
                    weathers.map((weather, index) =>
                        (
                            <WeatherBoard
                                key={`board-${index}`}
                                item={weather}
                                deleteWeather={deleteWeather}
                            />
                        )
                    )
                }
            </main>
        )
    }
}
