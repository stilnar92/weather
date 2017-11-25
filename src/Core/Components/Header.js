import React from 'react';
export const Header = ({title, children}) => (
    <div>
        <header className="header">
            <h1 className="header__title">{title}</h1>
            {children}
        </header>
    </div>
)