import React from "react";
import tempIcon from '../assets/images/temp-icon.svg'

const Header = ({tempUnit, setTempUnit}) => {

    const handleTempButton = () => {
        if (tempUnit === 'C') setTempUnit('F');
        else setTempUnit('C');
    }

    return (
        <div className="header">
            <h1 className="logoText"><span style={{color: 'white'}}>sky</span><span style={{color: '#546F91'}}>wise.</span></h1>
            <div className="tempButton" onClick={() => handleTempButton()}>
                <img src={tempIcon} alt="" className="tempIcon" />
            </div>
        </div>
    )
}

export default Header;