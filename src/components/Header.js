import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Header = ({ isHome = false }) => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }
    
    return (
        <header className="App-header">
            { !isHome ? <FontAwesomeIcon icon="arrow-left" size="2x" className="back-button" onClick={() => goToHome()} /> : "" }
            <div className="title-wrapper">
                <FontAwesomeIcon icon="pizza-slice" />
                <h1>Pizza 3000</h1>
            </div>
        </header>
    )
}

export default Header;
