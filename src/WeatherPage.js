import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Header} from './Header';
import WeatherList from './WeatherList';
import './App.css';
import 'react-loading-spinner/src/css/index.css';
import {WeatherPageActions} from './actions/WeatherPageActions';
import {WeatherPageService} from './Service';
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

    handleAddWeather = (location) => {
      return this.props.actions.addWeather(location);
    }

    handleDeleteWeather = (location) => {
        return this.props.actions.deleteWeather(location);
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
                {<WeatherList weathers={weathers} deleteWeather={this.handleDeleteWeather}/>}
                <AddCityModalForm
                    showModal={showModal}
                    onClose={this.handleCloseAddCityModal}
                    addWeather={this.handleAddWeather}
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
        actions: new WeatherPageActions(new WeatherPageService(), dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherPage)
