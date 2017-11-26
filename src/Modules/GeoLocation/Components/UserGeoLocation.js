import React, {Component} from 'react';
import {connect} from 'react-redux'
import {findUserArea} from '../../../Core/Utils'
import {MODAL_TYPES} from '../../../Core/Constants'
import {WeathersPageActions, LocationActions} from '../../Weather/Actions/index';
import {InterfaceActions} from '../../../Core/Actions/InterfaceActions';
import {WeathersPageService} from '../../Weather/Service';
import {LocationInfoModal} from '../../Weather/Components/Modals/index';
import {Loader} from '../../../Core/Components/Loader';

class UserGeoLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLocationFind: false,
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
        this.setState({showModal: false});
        this.props.locationActions.userConfirmLocation();
        this.props.interfaceActions.showModal(MODAL_TYPES.ADD_WEATHER)
    }

    renderBody = () => {
        const {userLocation, isUserNotConfirmLocation} = this.props;
        return (
            <div>
                {userLocation && isUserNotConfirmLocation &&
                    <LocationInfoModal
                        showModal={this.state.showModal}
                        value={userLocation}
                        onConfirm={this.handleConfirmLocation}
                        onCancel={this.handleShowAddWeatherModal}
                    />
                    }
                {this.props.children}
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
    let {location} = state;
    return {
        userLocation: location.userLocation,
        isUserNotConfirmLocation: location.status !== 'CONFIRM',
        isLoading: location.status === 'IDLE'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        weatherPageActions: new WeathersPageActions(new WeathersPageService(), dispatch),
        interfaceActions: new InterfaceActions(dispatch),
        locationActions: new LocationActions(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserGeoLocation)
