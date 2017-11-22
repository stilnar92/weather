import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getUserArea} from './Utils'
import {WeathersPageActions} from './actions/WeathersPageActions';
import {WeathersPageService} from './Service';
import {PlaceLocationModal} from  './PlaceLocationModal';
class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLocation: false,
            showModal: false,
            location: null
        }
    }

    componentDidMount() {
        const {saveUserLocation} = this.props.actions;
        getUserArea().then((area) => {
            saveUserLocation({area}).then(() => {
                this.setState({showModal: true})
            })
        })
    }

    handleCloseAddCityModal = () => {

    }

    handleContinue = () => {
        const {location, actions: {addWeather}} = this.props;
        this.setState({
                isLocation: true,
                showModal: false
            },
            () => {
                addWeather(location.area)
            }
        )


    }
    handleCloseModal = () => {

    }

    render() {

        const {isLocation, showModal} = this.state;
        const {location} = this.props;
        return (
            <div>
                {isLocation && this.props.children}
                <PlaceLocationModal
                    showModal={showModal}
                    value={location.area}
                    onClose={this.handleCloseAddCityModal}
                    onContinue={this.handleContinue}
                    onCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
}

const
    mapStateToProps = (state, ownProps) => {
        return {
            location: state.location.data
        }
    }

const
    mapDispatchToProps = (dispatch, ownProps) => {
        return {
            actions: new WeathersPageActions(new WeathersPageService(), dispatch),
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Location)
