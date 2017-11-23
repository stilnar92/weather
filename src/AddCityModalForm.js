import React, {Component} from 'react';
import {
    Modal,
    Button,
    FormGroup,
    ButtonToolbar
} from 'react-bootstrap';
import './App.css';
import PlacesAutocomplete from 'react-places-autocomplete'


export class AddCityModalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            area: ''
        }
    }

    handleChangeArea = (area) => {
        this.setState({area})
    }
    //
    handleAddWeather = () => {
        const {addWeather} = this.props;
        addWeather(this.state.area);
    }

    render() {
        const inputProps = {
            value: this.state.area,
            onChange: this.handleChangeArea,
        }
        return (
            <div className="static-modal">
                <Modal
                    show={this.props.showModal}
                    onHide={this.props.onClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add new city</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <PlacesAutocomplete inputProps={inputProps}/>
                            </FormGroup>
                            <ButtonToolbar>
                                <Button
                                    bsStyle="primary"
                                    onClick={this.handleAddWeather}
                                >
                                    Add
                                </Button>
                                <Button
                                    bsStyle="primary"
                                    onClick={this.props.onClose}
                                >
                                    Cancel
                                </Button>
                            </ButtonToolbar>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
