import React, {Component} from 'react';
import {WeatherFuture} from './WeatherFuture';
import {DAYS} from '../Constants'

export  class WeatherPredictList extends Component {

    render() {
        const {predicts} = this.props;
        return (
            <div className="future">
                {predicts.map((weather, index) =>
                    (DAYS.includes(index) &&
                        <WeatherFuture
                            weather={weather}
                            index={index}
                            key={`future_${index}`}
                        />))
                }
            </div>
        )
    }
}
