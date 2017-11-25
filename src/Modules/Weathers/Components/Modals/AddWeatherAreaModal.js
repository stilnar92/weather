import React, {Component} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete'
import {Modal, Portal, Button} from '../../../../Core/Components';
export class AddWeatherAreaModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            area: ''
        }
    }

    handleChoiceArea = (area) => {
        this.setState({area})
    }
    handleAddWeather = () => {
        const {addWeather} = this.props;
        addWeather(this.state.area);
        this.setState({area: ''})
    }

    render() {
        return (
            <Modal
                title="Add new city"
                showModal={this.props.showModal}
                body={
                    <PlacesAutocomplete inputProps={{
                        value: this.state.area,
                        onChange: this.handleChoiceArea,
                    }}/>
                }
                footer={
                    <div>
                        <Button
                            onClick={this.handleAddWeather}
                            className="button margin-right-1"
                            title="Add"
                        />
                        <Button
                            onClick={this.props.onClose}
                            className="button"
                            title="Cancel"
                        />
                    </div>
                }
            />
        )
    }
}
