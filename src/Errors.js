import React, {Component} from 'react';
import {Modal, Button, FormGroup, ControlLabel} from 'react-bootstrap';
import './App.css';
import {connect} from 'react-redux'
import {ErrorActions} from './actions/ErrorActions';
export class Errors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    render() {
        return (
            <div className="static-modal">
                <Modal
                    show={!!this.props.error.message}
                    onHide={this.props.actions.clear()}
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

const mapStateToProps = (state, ownProps) => {
    return {
        error: state.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: new ErrorActions(),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Errors)
