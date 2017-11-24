import React, {PureComponent} from 'react';

export class UserLocationModal extends PureComponent {

    render() {
        const {value, showModal, onConfirm, onCancel} = this.props;
        return (
                <div className={`dialog-container${showModal ? '--visible': ''}`}>
                    <div className="dialog">
                        <div className="dialog-title">Your region</div>
                        <div className="dialog-body">
                            {value}
                        </div>
                        <div className="dialog-buttons">
                            <button onClick={onConfirm} id="butAddCity" className="button">Yes</button>
                            <button onClick={onCancel} id="butAddCancel" className="button">No</button>
                        </div>
                    </div>
                </div>
        )
    }
}
