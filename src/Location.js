import React, {Component} from 'react';
import {connect} from 'react-redux'
import {findUserArea} from './Utils'
import {WeathersPageActions} from './actions/WeathersPageActions';
import {InterfaceActions} from './actions/InterfaceActions';
import {WeathersPageService} from './Service';
import {PlaceLocationModal} from './PlaceLocationModal';
import {AddCityModalForm} from './AddCityModalForm';
import WeatherPage from './WeatherPage';
import  {getCityFromArea} from  './Utils';

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
        const {saveUserLocation} = this.props.actions;
        if (this.props.isUserNotConfirmLocation) {
            findUserArea().then((area) => {
                saveUserLocation(area).then(() => (this.setState({isLocationFind: true})))
            })
        }
    }

    handleConfirmLocation = () => {
        const {userLocation, actions: {addWeather, userConfirmLocation}} = this.props;
        userConfirmLocation();
        addWeather(userLocation);
        this.setState({showModal: false})

    }
    handleShowAddWeatherModal = () => {
        this.setState({showModal: false, showAddWeatherModal: true})
    }

    handleAddWeather = (area) => {
        const {actions, errorActions} = this.props;
        this.setState({showAddWeatherModal: false}, () => {
            getCityFromArea(area).then((city) => actions.addWeather(city)).catch((error) => {
                errorActions.notify(error.message);
            });
        })
    }

    handleCloseAddCityModal = () => {
        this.setState({showAddWeatherModal: false})
    }


    render() {
        const {userLocation, isUserNotConfirmLocation} = this.props;
        return (
            <div>
                {userLocation && isUserNotConfirmLocation &&
                <PlaceLocationModal
                    showModal={this.state.showModal}
                    value={userLocation}
                    onConfirm={this.handleConfirmLocation}
                    onCancel={this.handleShowAddWeatherModal}
                />
                }
                <AddCityModalForm
                    showModal={this.state.showAddWeatherModal}
                    onClose={this.handleCloseAddCityModal}
                    addWeather={this.handleAddWeather}
                />
                <WeatherPage handleShowAddCityModal={this.handleShowAddWeatherModal}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userLocation: state.location.userLocation,
        isUserNotConfirmLocation: state.location.status !== 'CONFIRM',
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: new WeathersPageActions(new WeathersPageService(), dispatch),
        errorActions: new InterfaceActions(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)
