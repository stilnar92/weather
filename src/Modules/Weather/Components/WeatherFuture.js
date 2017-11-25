import React from 'react';
import {getIconClass, getDayofWeek} from  '../Utils';
import {Icon} from  '../../../Core/Components/Icon';

export const WeatherFuture = ({weather}) => {
    return (
        <div className="oneday">
            <div className="date">{getDayofWeek(weather.dt)}</div>
            <Icon type={getIconClass(weather.weather[0].icon)}/>
            <div className="temp-high">
                <span className="value">{weather.main.temp_max}</span>°
            </div>
            <div className="temp-low">
                <span className="value">{weather.main.temp_min}</span>°
            </div>
        </div>
    )
}
