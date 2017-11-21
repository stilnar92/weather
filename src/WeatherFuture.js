import React, {Component} from 'react';
import {getIconClass} from  './Utils';
import './App.css';
import {Icon} from  './Icon';


export const WeatherFuture = ({weather}) => {
    return (
        <div className="oneday">
            <div className="date">Fri</div>
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
