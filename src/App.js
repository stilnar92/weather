import React, {Component} from 'react';
import './Styles/App.css';
import UserGeoLocation from "./Modules/GeoLocation/Components/UserGeoLocation";
import WeatherPage from "./Modules/Weather/Pages/WeatherPage";
import AddWeatherModal from "./Modules/Weather/Components/Modals/AddWeatherModal";
import Errors from "./Core/Components/Errors";

class App extends Component {

    render() {
        return (
            <div className="App">
                <UserGeoLocation>
                    <WeatherPage/>
                </UserGeoLocation>
                <Errors/>
                <AddWeatherModal/>
            </div>
        );
    }
}

export default App;
