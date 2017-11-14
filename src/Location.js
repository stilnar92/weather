/*global google*/
import React, {Component} from 'react';
import './App.css';
import {PlaceLocationModal} from './PlaceLocationModal'
import {getAddressFromCoords} from './Utils'

export class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLocation: false,
            showModal: false,
            location: null
        }
    }

    componentDidMount() {
        let geolocation = navigator.geolocation;

        const location = new Promise((resolve, reject) => {
            if (!geolocation) {
                reject(new Error('Not Supported'));
            }
            geolocation.getCurrentPosition((position) => {
                return new Promise((resolve, reject) => resolve(getAddressFromCoords(position.coords.latitude, position.coords.longitude))).then((loc)=> {
                    alert(loc)
                    return loc;
                })
            }, () => {
                reject(new Error('Permission denied'));
            });
        });
        location.then((city) => {
            this.setState({
                showModal: true,
                location: city
            })

        })
    }
    handleCloseAddCityModal = () => {

    }

    render() {

        const {isLocation, showModal, location} = this.state;
        return (
            <div>
                {isLocation && this.props.children}
                <PlaceLocationModal
                    showModal={showModal}
                    value={location}
                    onClose={this.handleCloseAddCityModal}
                />
            </div>
        )
    }
}
