/*global google*/
import React, {Component, PureComponent} from 'react';
import {Modal, Button, FormGroup, ControlLabel, ButtonToolbar} from 'react-bootstrap';
import './App.css';

export class PlaceLocationModal extends PureComponent {

    render() {
        const {value, showModal, onConfirm, onCancel} = this.props;
        return (
            <div className="static-modal">
                <Modal
                    show={showModal}
                    onHide={onCancel}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Your region </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <ControlLabel>{value}</ControlLabel>
                            </FormGroup>
                            <ButtonToolbar>
                                <Button
                                    bsStyle="primary"
                                    onClick={onConfirm}
                                >
                                    Yes
                                </Button>
                                <Button
                                    bsStyle="primary"
                                    onClick={onCancel}
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
