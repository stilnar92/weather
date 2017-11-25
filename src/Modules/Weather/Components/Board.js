import React, {Component} from 'react';
import {WeatherPredictList} from  './WeatherPredictList';
import WeatherCurrent from "./WeatherCurrent";
import {Button} from '../../../Core/Components';
const TODAY = 1;

export class Board extends Component {

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
                <Button onClick={this.handleDeleteWeather} className="deleteButton"/>
                <WeatherCurrent forecast={currentWeather} area={city.name}/>
                <WeatherPredictList predicts={forecasts}/>
            </div>
        )
    }
}
