import React, {Component} from 'react';
import {Board} from './Board';

export default class WeatherList extends Component {

    render() {
        const {weathers, deleteWeather} = this.props;
        return (
            <main className="main">
                {
                    weathers.map((weather, index) =>
                        (
                            <Board
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
