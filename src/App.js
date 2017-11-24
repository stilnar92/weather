import React, {Component} from 'react';
import './Styles/App.css';
import Location from "./Modules/Weathers/Components/Location";
import Errors from "./Core/Components/Errors";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Location/>
                <Errors/>
            </div>
        );
    }
}

export default App;
