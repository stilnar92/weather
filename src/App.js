import React, {Component} from 'react';
import './Styles/App.css';
import Location from "./Modules/Weather/Components/Location";
import WeatherPage from "./Modules/Weather/Pages/WeatherPage";
import AddWeatherAreaModal from "./Modules/Weather/Components/Modals/AddWeatherAreaModal";
import Errors from "./Core/Components/Errors";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Location>
                    <WeatherPage/>
                </Location>
                <Errors/>
                <AddWeatherAreaModal/>
            </div>
        );
    }
}

export default App;
