import React from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('modal');
export class Portal extends React.Component {

    constructor(props) {
        super(props);
        this.node = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.node);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.node,
        );
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.node);
    }

}