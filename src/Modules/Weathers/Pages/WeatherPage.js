import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Header} from '../Components/Header';
import WeatherList from '../Components/WeatherList';
import {WeathersPageActions} from '../Actions/WeathersPageActions';
import {WeathersPageService} from '../Service';
import {NotifyActions} from '../../../Core/Actions/NotifyActions';
import {Loader} from '../../../Core/Components/Loader';

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

const mapStateToProps = (state) => {
    let {weathersModule: {weathers}} = state;
    return {
        weathers:  weathers.list,
        isLoading: weathers.status === 'RUNNING',
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: new WeathersPageActions(new WeathersPageService(), dispatch),
        errorActions: new NotifyActions(dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherPage)
