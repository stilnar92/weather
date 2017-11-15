import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import {PlaceLocationModal} from './PlaceLocationModal'
import {getAddressFromCoords} from './Utils'
import {addWeatherCity, locationSave} from './actions'

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
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getAddressFromCoords(latitude, longitude).then((area) => {
                this.props.locationSave({
                    area: area.short_name,
                    latitude,
                    longitude

                }).then(() => {
                    this.setState({showModal: true})
                })
            })
        }, () => {
            return new Error('Permission denied');
        });
    }

    handleCloseAddCityModal = () => {

    }

    handleContinue = () => {
        const {
            location: {
                latitude,
                longitude
            }
        } = this.props;
        this.setState({
                isLocation: true,
                showModal: false
            },
            () => {
                this.props.addWeatherCity({latitude, longitude})
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
                {this.props.children}
                {/*<PlaceLocationModal*/}
                    {/*showModal={showModal}*/}
                    {/*value={location.area}*/}
                    {/*onClose={this.handleCloseAddCityModal}*/}
                    {/*onContinue={this.handleContinue}*/}
                    {/*onCloseModal={this.handleCloseModal}*/}
                {/*/>*/}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        location: state.location.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addWeatherCity: (location) => {
            return new Promise((resolve) => resolve(dispatch(addWeatherCity(location))))
        },
        locationSave: (location) => {
            return new Promise((resolve) => resolve(dispatch(locationSave(location))))
        }
    }
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Location)
