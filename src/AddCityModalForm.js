/*global google*/
import React, {Component} from 'react';
import {Modal, Button, FormGroup} from 'react-bootstrap';
import './App.css';
import PlacesAutocomplete from 'react-places-autocomplete'
import {getLatLngFromAddress} from "./Utils";

export class AddCityModalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: ''
        }
    }

    handleChangeCity = (address) => {this.setState({address})}

    handleAddArea = () => {
        const {addWeather} = this.props;
        this.props.onClose();
        getLatLngFromAddress(this.state.address)
            .then((latLng) => addWeather({
                latitude: latLng.lat,
                longitude: latLng.lng
            }))
            .then(() => {
               console.log('ok')
            }).catch(error => console.error('Error', error))
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
                                onClick={this.handleAddArea}
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
