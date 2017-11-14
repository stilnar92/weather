/*global google*/
import React, {Component} from 'react';
import {Modal, Button, FormGroup, HelpBlock, FormControl, ControlLabel} from 'react-bootstrap';
import './App.css';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import {getAddressFromCoords} from "./Utils";

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

    handleAddCity = () => {
        geocodeByAddress(this.state.address)
            .then(results => {
                return getLatLng(results[0])
            })
            .then(latLng => {
                this.props.addWeatherCity(
                    {
                        latitude: latLng.lat,
                        longitude: latLng.lng
                    }).then(() => {
                        this.props.onClose();
                })
            })
            .catch(error => console.error('Error', error))
    }

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
                        <Modal.Title>Выберите город</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <PlacesAutocomplete inputProps={inputProps}/>
                            </FormGroup>
                            <Button
                                bsStyle="primary"
                                onClick={this.handleAddCity}
                            >
                                Добавить
                            </Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
