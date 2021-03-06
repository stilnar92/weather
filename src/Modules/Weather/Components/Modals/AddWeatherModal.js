import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PlacesAutocomplete from 'react-places-autocomplete';
import {MODAL_TYPES} from '../../../../Core/Constants';
import {InterfaceActions} from '../../../../Core/Actions/InterfaceActions';
import {Modal, Button} from '../../../../Core/Components';
import {WeathersPageActions} from '../../Actions/WeathersPageActions';
import {WeathersPageService} from '../../Service';
import {getCityFromArea} from '../../../../Core/Utils';

export class AddWeatherModal extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            area: ''
        }
    }

    componentWillUpdate() {
        this.searchInput.focus();
    }

    handleChoiceArea = (area) => {
        this.setState({area})
    }
    handleClearAreaInput = () => {
        this.setState({area: ''})
    }

    handleClose = () => {
        this.props.interfaceActions.closeModal(MODAL_TYPES.ADD_WEATHER);
    }

    handleAddWeather = () => {
        const {weatherPageActions, interfaceActions} = this.props;
        interfaceActions.closeModal(MODAL_TYPES.ADD_WEATHER);
        getCityFromArea(this.state.area).then((city) => weatherPageActions.addWeather(city)).then(() => {
            this.handleClearAreaInput();
        }).catch((error) => {
            this.handleClearAreaInput();
            interfaceActions.notify({type: 'SHOW_ERROR', message: error.message});
        });

    }

    render() {
        return (
            <Modal
                title="Add new city"
                showModal={this.props.modal[MODAL_TYPES.ADD_WEATHER] ? this.props.modal[MODAL_TYPES.ADD_WEATHER].isShow : false}
                body={
                    <PlacesAutocomplete
                        ref="placesAutocomplete"
                        inputProps={{
                            value: this.state.area,
                            onChange: this.handleChoiceArea,
                            ref: input => { this.searchInput = input; }
                        }}

                    />
                }
                footer={
                    <div>
                        <Button
                            onClick={this.handleAddWeather}
                            className="button margin-right-1"
                            title="Add"
                        />
                        <Button
                            onClick={this.handleClose}
                            className="button"
                            title="Cancel"
                        />
                    </div>
                }
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        weatherPageActions: new WeathersPageActions(new WeathersPageService(), dispatch),
        interfaceActions: new InterfaceActions(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWeatherModal)
