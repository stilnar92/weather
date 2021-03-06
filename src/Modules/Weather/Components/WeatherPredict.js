import React from 'react';
import {Icon} from  '../../../Core/Components/Icon';

export const WeatherPredict = ({weekDay, iconClass, tempMax, tempMin}) => {
    return (
        <div className="oneday">
            <div className="date">{weekDay}</div>
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
