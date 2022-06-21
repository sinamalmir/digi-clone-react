import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Row } from 'react-bootstrap';

import "../style/Header.css";

import Burger from './Burger';


import logo from "../data/logo.png"
import banner from "../data/top-banner.gif"

const MobileHeader = () => {
    return (
        <div>
             <header className='mobile-header'>
            <div className="top-header">
                <img src={banner} alt="" />
            </div>

            <div className="top-head">
                <Row>
                    <div className="col-4">
                        <Burger />
                    </div>
                    <div className="col-4 logo-wrapper">
                        <img src={logo} alt="logo" style={{width:"80px" ,height:"30px" ,margin:"0 auto"}} />
                    </div>
                    <div className="col-4 d-flex flex-end">
                        <FontAwesomeIcon icon={solid('question')} /> 
                    </div>
                </Row>
            </div>
            
            <div className="midle-head">
                <Row>
                    <div className="col-7">
                        <input type="text" placeholder='جستجو' />
                    </div>
                    <div className="col-3 login-wrapper">
                        <div className='login-icon'>
                            <FontAwesomeIcon icon={solid('arrow-right-to-bracket')} />
                        </div>
                        <span> ورود </span>
                    </div>
                    <div className="col-2 cart-icon">
                      <FontAwesomeIcon icon={solid('cart-shopping')} />
                    </div>
                </Row>
            </div>

            <div className="menu">
                <div className="digi-logo">
                    <img src={logo} alt="" style={{height:"34px"}} />
                </div>
                <ul>
                    <li><a href="#"> 
                    <FontAwesomeIcon icon={solid('store')} />
                    سوپر مارکت 
                    </a></li>
                    <li><a href="#">
                    <FontAwesomeIcon icon={solid('store')} />
                         پرفروش ترین ها </a></li>
                    <li><a href="#">
                    <FontAwesomeIcon icon={solid('store')} />
                         تخفیف ها و پیشنهادها </a></li>
                    <li><a href="#">
                    <FontAwesomeIcon icon={solid('store')} />
                         شگفت انگیزها </a></li>
                    <li><a href="#">
                    <FontAwesomeIcon icon={solid('store')} />
                         سوالی دارید؟ </a></li>
                    <li><a href="#">
                    <FontAwesomeIcon icon={solid('store')} />
                         فروشنده شوید </a></li>
                </ul>
            </div>

        </header>

        </div>
    );
};

export default MobileHeader;