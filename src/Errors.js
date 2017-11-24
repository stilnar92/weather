import React, {Component} from 'react';
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
            <div className={`dialog-container${!!this.props.error.message ? '--visible' : ''}`}>
                <div className="dialog">
                    <div className="dialog-title">Error</div>
                    <div className="dialog-body">
                        {this.props.error.message}
                    </div>
                    <div className="dialog-buttons">
                        <button onClick={this.handleClose} id="butAddCity" className="button">Ok</button>
                    </div>
                </div>
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
