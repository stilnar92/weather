/*global google*/
import React, {Component} from 'react';
import {Modal, Button, FormGroup, HelpBlock, FormControl, ControlLabel} from 'react-bootstrap';
import './App.css';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'

export class PlaceLocationModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {value, handleContinue, handleShowAddCityModal} = this.props;
        return (
            <div className="static-modal">
                <Modal
                    show={this.props.showModal}
                    onHide={this.props.onClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Ваш регион</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <ControlLabel>{value}</ControlLabel>
                            </FormGroup>
                            <Button
                                bsStyle="primary"
                                onClick={handleContinue}
                            >
                                Да
                            </Button>
                            <Button
                                bsStyle="primary"
                                onClick={handleShowAddCityModal}
                            >
                                Нет, указать другой
                            </Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
