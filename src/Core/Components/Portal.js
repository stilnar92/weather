import React from 'react';
import ReactDOM from 'react-dom';

export class Portal extends React.Component {

    static defaultProps = {
        top: 0,
        left: 0
    };

    constructor(props) {
        super(props);
        this.node = document.createElement('div');
        document.body.appendChild(this.node);
    }

    render() {
        return <div />;
    }

    componentDidUpdate() {
        ReactDOM.render(
            <div
                {...this.props}
            />,
            this.node
        );
    }

    componentWillUnmout() {
        document.body.removeChild(this.node);
    }

}