import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tile = ({ name, description, icon, bgColor, action }) => {
    return (
        <div className="tile" onClick={action} style={{
            backgroundColor: bgColor
        }}>
            <div className="tile-icon">
                <FontAwesomeIcon icon={ icon } />
            </div>
            <div className="tile-text">
                <h2>{ name }</h2>
                <p>{ description }</p>
            </div>
        </div>
    );
}

export default Tile;
