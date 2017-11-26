import React, {Component} from 'react';
import {WeatherPredictList} from  './WeatherPredictList';

import {WeatherCurrent} from "./WeatherCurrent";
import {Button} from '../../../Core/Components';

export class Board extends Component {

    handleDeleteWeather = () => {
        this.props.deleteWeather(this.props.area)
    }

    render() {
        const {
            current,
            predicts,
            area
        } = this.props;
        return (
            <div className="card weather-forecast">
                <Button onClick={this.handleDeleteWeather} className="deleteButton"/>
                <div className="location">{area}</div>
                <WeatherCurrent
                    {...current}
                    area
                />
                <WeatherPredictList predicts={predicts}/>
            </div>
        )
    }
}
