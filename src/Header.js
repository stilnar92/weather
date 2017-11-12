import React from 'react';
export const Header = ({loadWeather}) => (
    <div>
        <header className="header">
            <h1 className="header__title">Weather</h1>
            <button id="butRefresh" className="headerButton" onClick={loadWeather} aria-label="Refresh">d</button>
            <button id="butAdd" className="headerButton" aria-label="Add">d</button>
        </header>
    </div>
)