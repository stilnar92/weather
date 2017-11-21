import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Header} from './Header';
import WeatherList from './WeatherList';
import './App.css';

import {WeatherPageActions} from './actions/WeatherPageActions';
import {WeatherPageService} from './Service';
import {AddCityModalForm} from './AddCityModalForm';
import {Loader} from './Loader';

class WeatherPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    handleRefreshWeather = () => {
        const {weathers, actions} = this.props;
        let refreshList = weathers.map((weather) => {
            const {lat: latitude, lon: longitude} = weather.city.coord;
            return () => actions.addWeather({latitude, longitude})
        });
        actions.deleteAll();
        Promise.all(refreshList.map((refresh) => refresh()));

    }

    handleShowAddCityModal = () => {
        this.setState({showModal: true})
    }

    handleCloseAddCityModal = () => {
        this.setState({showModal: false})
    }

    handleAddWeather = (location) => {
        return this.props.actions.addWeather(location);
    }

    handleDeleteWeather = (location) => {
        return this.props.actions.deleteWeather(location);
    }


    render() {
        const {showModal} = this.state;
        const {weathers, isLoading} = this.props;
        return (
            <div>
                <Header
                    refreshWeather={this.handleRefreshWeather}
                    addCity={this.handleShowAddCityModal}
                />
                <AddCityModalForm
                    showModal={showModal}
                    onClose={this.handleCloseAddCityModal}
                    addWeather={this.handleAddWeather}
                />
                {isLoading ? <Loader/> :
                    <main className="main">
                        <WeatherList weathers={weathers} deleteWeather={this.handleDeleteWeather}/>
                    </main>
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        weathers: state.weathers.list,
        isLoading: state.weathers.status === 'RUNNING'
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: new WeatherPageActions(new WeatherPageService(), dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherPage)
