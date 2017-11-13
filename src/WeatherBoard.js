import React, {Component} from 'react';
import { connect } from 'react-redux'
import {fetchWeather} from './actions'
import './App.css';

export default class WeatherBoard extends Component {


    render() {
        const {item} = this.props;
        return (
            <main className="main">
                <div className="card cardTemplate weather-forecast">
                    <div className="location">{item && item.name}</div>
                    <div className="date">Sun, 12 Nov 2017 11:00 AM EST</div>
                    <div className="description">{item && item.weather[0].main}</div>
                    <div className="current">
                        <div className="visual">
                            <div className="icon snow"></div>
                            <div className="temperature">
                                <span className="value">40</span><span className="scale">°F</span>
                            </div>
                        </div>
                        <div className="description">
                            <div className="humidity">37%</div>
                            <div className="wind">
                                <span className="value">7</span>
                                <span className="scale">mph</span>
                                <span className="direction">225°</span>°
                            </div>
                            <div className="sunrise">6:39 am</div>
                            <div className="sunset">4:41 pm</div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
//
// const mapStateToProps = (state) => {
//     return {
//         weather: state.weather.data
//     }
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         loadWeather: (city) => {
//             dispatch(fetchWeather(city))
//         }
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(WeatherBoard);
