import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Header} from './Header';
import WeatherList from './WeatherList';
import './App.css';

import {WeathersPageActions} from './actions/WeathersPageActions';
import {WeathersPageService} from './Service';
import {InterfaceActions} from './actions/InterfaceActions';
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
            return () => actions.addWeather(weather.city.name)
        });
        actions.deleteAll();
        Promise.all(refreshList.map((refresh) => refresh()));

    }

    handleDeleteWeather = (location) => {
        return this.props.actions.deleteWeather(location);
    }


    render() {
        const {weathers, isLoading} = this.props;
        return (
            <div>
                <Header
                    refreshWeather={this.handleRefreshWeather}
                    addCity={this.props.handleShowAddCityModal}
                />
                {isLoading ? <Loader/> : <WeatherList weathers={weathers} deleteWeather={this.handleDeleteWeather}/>}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        weathers: state.weathers.list,
        isLoading: state.weathers.status === 'RUNNING',
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: new WeathersPageActions(new WeathersPageService(), dispatch),
        errorActions: new InterfaceActions(dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherPage)
