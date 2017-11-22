/*global google*/
import React, {Component} from 'react';
import {Modal, Button, FormGroup, ControlLabel, ButtonToolbar} from 'react-bootstrap';
import './App.css';

export class PlaceLocationModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {value, onContinue, onClose, onCloseModal} = this.props;
        return (
            <div className="static-modal">
                <Modal
                    show={this.props.showModal}
                    onHide={this.props.onCloseModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Your region</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <ControlLabel>{value}</ControlLabel>
                            </FormGroup>
                            <ButtonToolbar>
                                <Button
                                    bsStyle="primary"
                                    onClick={onContinue}
                                >
                                    Yes
                                </Button>
                                <Button
                                    bsStyle="primary"
                                    onClick={onClose}
                                >
                                    No
                                </Button>
                            </ButtonToolbar>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
