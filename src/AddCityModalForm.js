import React, {Component} from 'react';
import {
    Modal,
    Button,
    FormGroup,
    ButtonToolbar
} from 'react-bootstrap';
import './App.css';
import PlacesAutocomplete from 'react-places-autocomplete'
import  {getCityFromArea} from  './Utils';

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

    handleAddArea = () => {
        const {addWeather} = this.props;
        this.props.onClose();
        getCityFromArea(this.state.area).then((city) => addWeather(city));
    }

    handleCancel = () => {
        this.props.onClose();
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
                                    onClick={this.handleAddArea}
                                >
                                    Add
                                </Button>
                                <Button
                                    bsStyle="primary"
                                    onClick={this.handleCancel}
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
