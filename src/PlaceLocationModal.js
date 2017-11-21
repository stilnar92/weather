/*global google*/
import React, {Component} from 'react';
import {Modal, Button, FormGroup, ControlLabel} from 'react-bootstrap';
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
                        <Modal.Title>Ваш регион</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <ControlLabel>{value}</ControlLabel>
                            </FormGroup>
                            <Button
                                bsStyle="primary"
                                onClick={onContinue}
                            >
                                Да
                            </Button>
                            <Button
                                bsStyle="primary"
                                onClick={onClose}
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
