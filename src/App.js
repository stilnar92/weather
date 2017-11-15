import React, {Component} from 'react';
import WeatherPage from './WeatherPage';
import './App.css';
import Location from "./Location";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Location>
                    <WeatherPage/>
                </Location>
            </div>
        );
    }
}

export default App;
