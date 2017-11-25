import React from 'react';
export const Button = ({onClick, title, className}) => (
    <button className={className} onClick={onClick}>{title || ''}</button>
)