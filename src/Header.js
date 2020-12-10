import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        // BEM
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            <img
                className="header__wetapic"
                src="https://www.zipcodewilmington.com/hubfs/SI-Images/Home%20Page-Universal/ZCW-logo-horizontal.svg"
                alt="Zip Code Logo"/>
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header;