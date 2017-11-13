import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Header} from './Header';
import WeatherList from './WeatherList';
import './App.css';
import {fetchWeather, addWeatherCity} from './actions'
import 'react-loading-spinner/src/css/index.css';
import {AddCityModalForm} from './AddCityModalForm';

class WeatherPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    componentDidMount() {
        this.props.addWeatherCity('Ufa');
    }

    handleRefreshWeather = () => {
        this.props.loadWeather('Ufa');
    }

    handleShowAddCityModal = () => {
        this.setState({showModal: true})
    }

    handleCloseAddCityModal = () => {
        this.setState({showModal: false})
    }

    render() {
        const {showModal} = this.state;
        const {weathers} = this.props;
        return (
            <div className="App">
                <Header
                    refreshWeather={this.handleRefreshWeather}
                    addCity={this.handleShowAddCityModal}
                />
                <WeatherList weathers={weathers}/>
                <AddCityModalForm
                    showModal={showModal}
                    onClose={this.handleCloseAddCityModal}
                    addWeatherCity={this.props.addWeatherCity}
                    addCityWeather={this.props.addCityWeather}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.weather.status,
        weathers: state.weathers.list
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadWeather: (city) => {
            dispatch(fetchWeather(city))
        },
        addWeatherCity: (city) => {
            return new Promise((resolve) => resolve(dispatch(addWeatherCity(city))))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherPage)
