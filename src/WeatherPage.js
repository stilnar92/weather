import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Header} from './Header';
import WeatherList from './WeatherList';
import './App.css';
import {addWeatherCity} from './actions'
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
            <div>
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
        weathers: state.weathers.list
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addWeatherCity: (location) => {
            return new Promise((resolve) => resolve(dispatch(addWeatherCity(location))))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherPage)
