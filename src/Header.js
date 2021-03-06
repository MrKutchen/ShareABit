import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"

import {Link} from "react-router-dom";

function Header({backButton}) {
    return (
        // BEM
        <div className="header">
            {backButton ? (
                <IconButton>
                    <ArrowBackIosIcon fontSize="large" className="header__icon"/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            )}
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://www.zipcodewilmington.com/hubfs/SI-Images/Home%20Page-Universal/ZCW-logo-horizontal.svg"
                    alt="Zip Code Logo"/>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;