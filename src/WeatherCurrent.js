import React, {Component} from 'react';
import {timeStampConvertTime, getIconClass} from  './Utils';
import {Icon} from  './Icon';

export default class WeatherCurrent extends Component {

    render() {
        const {
            area,
            forecast: {
                weather: [
                    {
                        main,
                        description,
                        icon
                    }
                ],
                dt: currentDate,
                main: {
                    temp,
                    humidity
                },
                wind

            }
        } = this.props;
        const weatherType = getIconClass(icon);
        return (
            <div>
                <div className="location">{area}</div>
                <div className="date">{timeStampConvertTime(currentDate)}</div>
                <div className="description">{description}</div>
                <div className="current">
                    <div className="visual">
                        <Icon type={weatherType}/>
                        <div className="temperature">
                            <span className="value">{temp}</span><span className="scale">°C</span>
                        </div>
                    </div>
                    <div className="description">
                        <div className="humidity">{`${humidity}%`}</div>
                        <div className="wind">
                            <span className="value">{`${wind.speed} mph ${parseInt(wind.deg)}°`}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
