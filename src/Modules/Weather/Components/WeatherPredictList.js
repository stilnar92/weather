import React, {Component} from 'react';
import {WeatherFuture} from './WeatherFuture';

export const WeatherPredictList = ({predicts}) => {
    return (
        <div className="future">
            {
                predicts.map((weather, index) =>
                    <WeatherFuture
                        {...weather}
                        key={`future_${index}`}
                    />)
            }
        </div>
    )
}
