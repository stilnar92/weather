import React, {Component} from 'react';
import {timeStampConvertTime} from  './Utils';
import './App.css';

export default class WeatherBoard extends Component {

    render() {
        const {
            item,
            item: {
                dt: currentDate,
                sys: {
                    sunrise,
                    sunset
                }

            }
        } = this.props;
        return (
            <main className="main">
                <div className="card cardTemplate weather-forecast">
                    <div className="location">{item.name}</div>
                    <div className="date">{timeStampConvertTime(currentDate)}</div>
                    <div className="description">{item.weather[0].main}</div>
                    <div className="current">
                        <div className="visual">
                            <div className="icon snow"></div>
                            <div className="temperature">
                                <span className="value">{item.main.temp}</span><span className="scale">°C</span>
                            </div>
                        </div>
                        <div className="description">
                            <div className="humidity">37%</div>
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
