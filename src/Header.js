import React from 'react';
export const Header = ({refreshWeather, addCity}) => (
    <div>
        <header className="header">
            <h1 className="header__title">Weather</h1>
            <button id="butRefresh" className="headerButton" onClick={refreshWeather} aria-label="Refresh">d</button>
            <button id="butAdd" className="headerButton" onClick={addCity} aria-label="Add">d</button>
        </header>
    </div>
)