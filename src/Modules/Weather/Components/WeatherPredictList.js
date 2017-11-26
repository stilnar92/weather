import React, {Component} from 'react';
import {WeatherFuture} from './WeatherFuture';
import {DAYS} from '../Constants'
import {getIconClass, getDayofWeek} from '../Utils'

export  class WeatherPredictList extends Component {

    render() {
        const {predicts} = this.props;
        return (
            <div className="future">
                {predicts.map((weather, index) =>
                    (DAYS.includes(index) &&
                        <WeatherFuture
                            date={getDayofWeek(weather.dt)}
                            iconClass={getIconClass(weather.weather[0].icon)}
                            tempMax={weather.main.temp_max}
                            tempMin={weather.main.temp_min}
                            index={index}
                            key={`future_${index}`}
                        />))
                }
            </div>
        )
    }
}
