import React from 'react';
import {Icon} from  '../../../Core/Components/Icon';

export const WeatherCurrent = ({
       iconClass,
       description,
       currentDate,
       temp,
       humidity,
       windSpeed,
       windDegree,
    }) => (
        <div>
            <div className="date">{currentDate}</div>
            <div className="description">{description}</div>
            <div className="current">
                <div className="visual">
                    <Icon type={iconClass}/>
                    <div className="temperature">
                        <span className="value">{temp}</span><span className="scale">°C</span>
                    </div>
                </div>
                <div className="description">
                    <div className="humidity">{`${humidity}%`}</div>
                    <div className="wind">
                        <span className="value">{`${windSpeed} mph ${windDegree}°`}</span>
                    </div>
                </div>
            </div>
        </div>
)