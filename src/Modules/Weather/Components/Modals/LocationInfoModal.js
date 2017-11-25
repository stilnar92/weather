import React, {PureComponent} from 'react';
import {Modal, Button} from '../../../../Core/Components/index';
export class LocationInfoModal extends PureComponent {

    renderModalFooter = () => {
        const {onConfirm, onCancel} = this.props;
        return (
            <div>
                <Button onClick={onConfirm} className="button margin-right-1" title="Yes"/>
                <Button onClick={onCancel} className="button" title="No"/>
            </div>
        )
    }

    render() {
        const {value, showModal} = this.props;
        return (
            <Modal
                title="Your region"
                showModal={showModal}
                body={value}
                footer={this.renderModalFooter()}
            />
        )
    }
}
