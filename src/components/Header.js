import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import "../style/Header.css";

import logo from "../data/logo.png"
import banner from "../data/top-banner.gif"

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';


const Header = () => {


    return (
        <>
       <MobileHeader />

       <DesktopHeader />
        
        </>

    );
};

export default Header;



{/* <FontAwesomeIcon icon={solid('shopping-basket')} /> */}
