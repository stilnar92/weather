import React, {Component} from 'react';
import {getIconClass} from  './Utils';
import './App.css';
import {Icon} from  './Icon';


export const WeatherFuture = ({forecasts}) => {
    const days = [0, 9, 17, 25, 31];
    return (
        <div className="future">
            {forecasts.map((weather, index) => {
                return (
                    <div>
                        {
                            index in days &&
                                <div className="oneday" key={index}>
                                    <div className="date">Fri</div>
                                    <Icon type={getIconClass(weather.weather[0].icon)}/>
                                    <div className="temp-high">
                                        <span className="value">{weather.main.temp_max}</span>°
                                    </div>
                                    <div className="temp-low">
                                        <span className="value">{weather.main.temp_min}</span>°
                                    </div>
                                </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}
