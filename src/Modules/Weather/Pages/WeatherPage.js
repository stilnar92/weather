import React, {Component} from 'react';
import {connect} from 'react-redux'
import {WeatherHeader as Header} from '../Components/WeatherHeader';
import WeatherList from '../Components/WeatherList';
import {WeathersPageActions} from '../Actions/WeathersPageActions';
import {WeathersPageService} from '../Service';
import {InterfaceActions} from '../../../Core/Actions/InterfaceActions';
import {Loader} from '../../../Core/Components/Loader';
import {MODAL_TYPES} from '../../../Core/Constants'

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

    handleShowAddCityModal = () => {
        this.props.interfaceActions.showModal(MODAL_TYPES.ADD_WEATHER)
    }

    render() {
        const {weathers, isLoading} = this.props;
        return (
            <div>
                <Header
                    refreshWeather={this.handleRefreshWeather}
                    addCity={this.handleShowAddCityModal}
                />
                {isLoading ? <Loader/> : <WeatherList weathers={weathers} deleteWeather={this.handleDeleteWeather}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let {weathers} = state;
    return {
        weathers:  weathers.list,
        isLoading: weathers.status === 'RUNNING',
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: new WeathersPageActions(new WeathersPageService(), dispatch),
        interfaceActions: new InterfaceActions(dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherPage)
