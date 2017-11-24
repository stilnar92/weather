import React, {Component} from 'react';
import {connect} from 'react-redux'
import {findUserArea, getCityFromArea} from '../../../Core/Utils'
import {WeathersPageActions, LocationActions} from '../Actions/';
import {NotifyActions} from '../../../Core/Actions/NotifyActions';
import {WeathersPageService} from '../Service';
import {UserLocationModal, AddWeatherAreaModal} from './Modals';
import {Loader} from '../../../Core/Components/Loader';
import WeatherPage from '../Pages/WeatherPage';

class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLocationFind: false,
            showAddWeatherModal: false,
            showModal: true
        }
    }

    componentDidMount() {
        const {saveUserLocation} = this.props.locationActions;
        if (this.props.isUserNotConfirmLocation) {
            findUserArea().then((area) => {
                saveUserLocation(area).then(() => (this.setState({isLocationFind: true})))
            })
        }
    }

    handleConfirmLocation = () => {
        const {userLocation, weatherPageActions: {addWeather}, locationActions} = this.props;
        locationActions.userConfirmLocation();
        addWeather(userLocation);
        this.setState({showModal: false})

    }
    handleShowAddWeatherModal = () => {
        this.setState({showModal: false, showAddWeatherModal: true})
    }

    handleAddWeather = (area) => {
        const {weatherPageActions, errorActions} = this.props;
        this.setState({showAddWeatherModal: false}, () => {
            getCityFromArea(area).then((city) => weatherPageActions.addWeather(city)).catch((error) => {
                errorActions.notify({type: 'SHOW_ERROR', message: error.message});
            });
        })
    }

    handleCloseAddCityModal = () => {
        this.setState({showAddWeatherModal: false})
    }

    renderBody = () => {
        const {userLocation, isUserNotConfirmLocation} = this.props;
        return (
            <div>
                {userLocation && isUserNotConfirmLocation &&
                <UserLocationModal
                    showModal={this.state.showModal}
                    value={userLocation}
                    onConfirm={this.handleConfirmLocation}
                    onCancel={this.handleShowAddWeatherModal}
                />
                }

                <AddWeatherAreaModal
                    showModal={this.state.showAddWeatherModal}
                    onClose={this.handleCloseAddCityModal}
                    addWeather={this.handleAddWeather}
                />
                <WeatherPage handleShowAddCityModal={this.handleShowAddWeatherModal}/>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.isLoading ? <Loader/> : this.renderBody()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    let {weathersModule: {location}} = state;
    return {
        userLocation: location.userLocation,
        isUserNotConfirmLocation: location.status !== 'CONFIRM',
        isLoading: location.status === 'IDLE'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        weatherPageActions: new WeathersPageActions(new WeathersPageService(), dispatch),
        errorActions: new NotifyActions(dispatch),
        locationActions: new LocationActions(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)
