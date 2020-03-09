import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className="toggle_button" onClick={props.click}>
        <div className="toggleButtonLine"></div>
        <div className="toggleButtonLine"></div>
        <div className="toggleButtonLine"></div>
    </button>
);

export default DrawerToggleButton;