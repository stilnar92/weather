import React, {Component} from 'react';
import {WeatherFuture} from  './WeatherFuture';
import WeatherCurrent from "./WeatherCurrent";
import {DAYS} from './Constants'
const TODAY = 1;

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
            <div className="card weather-forecast">
                <button id="butDelete" className="deleteButton" onClick={this.handleDeleteWeather}>
                </button>
                <WeatherCurrent forecast={currentWeather} area={city.name}/>
                <div className="future">
                    {forecasts.map((weather, index) => (index in DAYS && <WeatherFuture weather={weather} key={`future_${index}`}/>))}
                </div>
            </div>
        )
    }
}
