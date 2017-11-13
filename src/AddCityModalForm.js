/*global google*/
import React, {Component} from 'react';
import {Modal, Button, FormGroup, HelpBlock, FormControl, ControlLabel} from 'react-bootstrap';
import './App.css';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'

export class AddCityModalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: ''
        }
    }

    handleChangeCity = (address) => {
        this.setState({address})
    }

    codeLatLng = (lat, lng) => {
        const geocoder = new google.maps.Geocoder();;
        let latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({'latLng': latlng}, (results, status) =>{
            if (status === google.maps.GeocoderStatus.OK) {
                let city = null;
                if (results[1]) {
                    for (let i = 0; i < results[0].address_components.length; i++) {
                        for (let b = 0; b < results[0].address_components[i].types.length; b++) {
                            if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                                city = results[0].address_components[i];
                                break;
                            }
                        }
                    }
                    return city;
                } else {
                    alert("No results found");
                }
            } else {
                alert("Geocoder failed due to: " + status);
            }
        });
    }

    handleAddCity = () => {
        let geolocation = navigator.geolocation;

        const location = new Promise((resolve, reject) => {
            if (!geolocation) {
                reject(new Error('Not Supported'));
            }

            geolocation.getCurrentPosition((position) => {
                this.codeLatLng(position.coords.latitude, position.coords.longitude)
            }, () => {
                reject(new Error('Permission denied'));
            });
        });
        // geocodeByAddress(this.state.address)
        //     .then(results => {
        //         console.log(results)
        //         getLatLng(results[0])
        //     })
        //     .then(latLng => {
        //         this.props.addWeatherCity('Ufa').then(() => {
        //             this.props.onClose();
        //         })
        //     })
        //     .catch(error => console.error('Error', error))
    }

    onLocationSet = (data) => {
        // data.description
        // data.coords.lat
        // data.coords.lng
    };

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.handleChangeCity,
        }
        return (
            <div className="static-modal">
                <Modal
                    show={this.props.showModal}
                    onHide={this.props.onClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <PlacesAutocomplete inputProps={inputProps}/>
                            <Button
                                bsStyle="primary"
                                onClick={this.handleAddCity}
                            >
                                Add
                            </Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
