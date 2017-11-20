import React, {Component} from 'react';
import {timeStampConvertTime, getIconClass} from  './Utils';
import './App.css';
import {Icon} from  './Icon';
import {WeatherFuture} from  './WeatherFuture';
import WeatherCurrent from "./WeatherCurrent";

const TODAY = 4;

export default class WeatherBoard extends Component {

    handleDeleteWeather = () => {
        const {item: {city}} = this.props;
        this.props.deleteWeather(city)
    }

    render() {
        const {
            item: {
                list: forecasts,
                city
            },
        } = this.props;
        const currentWeather = forecasts[TODAY];
        return (
            <main className="main">
                <div className="card cardTemplate weather-forecast">
                    <WeatherCurrent forecast={currentWeather} area={city.name}/>
                    <WeatherFuture forecasts={forecasts}/>
                    <button id="butRefresh" className="headerButton" onClick={this.handleDeleteWeather} aria-label="Refresh">d</button>
                </div>
            </main>
        )
    }
}
