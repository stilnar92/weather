import React, {Component} from 'react';
import {timeStampConvertTime} from  './Utils';
import './App.css';

export default class WeatherBoard extends Component {

    render() {
        const {
            item,
            item: {
                weather: [
                    {
                        main,
                        description
                    }
                ],
                name,
                dt: currentDate,
                sys: {
                    sunrise,
                    sunset
                },
                main: {
                    temp,
                    humidity
                }

            }
        } = this.props;
        return (
            <main className="main">
                <div className="card cardTemplate weather-forecast">
                    <div className="location">{name}</div>
                    <div className="date">{timeStampConvertTime(currentDate)}</div>
                    <div className="description">{description}</div>
                    <div className="current">
                        <div className="visual">
                            <div className="icon snow"></div>
                            <div className="temperature">
                                <span className="value">{temp}</span><span className="scale">°C</span>
                            </div>
                        </div>
                        <div className="description">
                            <div className="humidity">{`${humidity}%`}</div>
                            <div className="wind">
                                <span className="value">7</span>
                                <span className="scale">mph</span>
                                <span className="direction">225°</span>°
                            </div>
                            <div className="sunrise">{timeStampConvertTime(sunrise)}</div>
                            <div className="sunset">{timeStampConvertTime(sunset)}</div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
