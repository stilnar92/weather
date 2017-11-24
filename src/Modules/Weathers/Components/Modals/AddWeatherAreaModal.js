import React, {Component} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete'

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
        const inputProps = {
            value: this.state.area,
            onChange: this.handleChoiceArea,
        }
        return (
            <div className={`dialog-container${this.props.showModal ? '--visible': ''}`}>
                <div className="dialog">
                    <div className="dialog-title">Add new city</div>
                    <div className="dialog-body">
                        <PlacesAutocomplete inputProps={inputProps}/>
                    </div>
                    <div className="dialog-buttons">
                        <button onClick={this.handleAddWeather} id="butAddCity" className="button">Add</button>
                        <button onClick={this.props.onClose} id="butAddCancel" className="button">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
