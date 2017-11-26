import React from 'react';
import {WeatherPredict} from './WeatherPredict';

export const WeatherPredictList = ({predicts}) => {
    return (
        <div className="future">
            {
                predicts.map((weather, index) =>
                    <WeatherPredict
                        {...weather}
                        key={`future_${index}`}
                    />)
            }
        </div>
    )
}
