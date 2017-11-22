import React, {Component} from 'react';
import {Modal, Button, FormGroup, ControlLabel} from 'react-bootstrap';
import './App.css';
import {connect} from 'react-redux'
import {InterfaceActions} from './actions/InterfaceActions';
export class Errors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    handleClose = () => {
        this.props.actions.clear();
    }

    render() {
        return (
            <div className="static-modal">
                <Modal
                    show={!!this.props.error.message}
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Ошибка</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <ControlLabel>{this.props.error.message}</ControlLabel>
                            </FormGroup>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: new InterfaceActions(dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Errors)
