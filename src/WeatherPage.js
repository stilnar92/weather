import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Header} from './Header';
import {WeatherBoard} from './WeatherBoard';
import './App.css';
import {fetchWeather} from './actions'

class WeatherPageComponent extends Component {

    handleLoadWeather = () => {
        this.props.loadWeather('Ufa');
    }
    render() {
        return (
            <div className="App">
                <Header loadWeather={this.handleLoadWeather}/>
                <WeatherBoard/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        weather: state.weather
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadWeather: (city) => {
            dispatch(fetchWeather(city))
        }
    }
}

const WeatherPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherPageComponent)

export default WeatherPage;
