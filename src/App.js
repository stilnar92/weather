import React, {Component} from 'react';
import WeatherPage from './WeatherPage';
import './App.css';
import Location from "./Location";
import Errors from "./Errors";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Location>
                    <WeatherPage/>
                </Location>
                <Errors/>
            </div>
        );
    }
}

export default App;
