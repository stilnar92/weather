import React from 'react';
import {getIconClass, getDayofWeek} from  '../Utils';
import {Icon} from  '../../../Core/Components/Icon';

export const WeatherFuture = ({date, iconClass, tempMax, tempMin}) => {
    return (
        <div className="oneday">
            <div className="date">{getDayofWeek(date)}</div>
            <Icon type={iconClass}/>
            <div className="temp-high">
                <span className="value">{tempMax}</span>°
            </div>
            <div className="temp-low">
                <span className="value">{tempMin}</span>°
            </div>
        </div>
    )
}
