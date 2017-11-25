import React from 'react';
import {Header, Button} from  '../../../Core/Components';

export const WeatherHeader = ({refreshWeather, addCity}) => (
    <Header title="Weather">
        <Button onClick={refreshWeather} className="refreshButton" />
        <Button onClick={addCity} className="addButton"/>
    </Header>
)