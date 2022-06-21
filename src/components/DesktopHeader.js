import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Row } from 'react-bootstrap';

import "../style/Header.css";

import logo from "../data/logo.png"
import banner from "../data/top-banner.gif"


const DesktopHeader = () => {
    return (
        <div>
            <header className='desktop-header'>
            <div className="top-header">
                <img src={banner} alt="banner top" />
            </div>
            <div className="top-desktop-header">
                <Row>
                    <div className="col-2">
                    <img src={logo} alt="logo" style={{ height:"30px"}} />
                    </div>
                    <div className="col-7 search-btn">
                        <input type="text" placeholder='جستجو'/>
                    </div>
                    <div className="col-3">
                        <div className="wrapper-top-left-header">
                            <div className="signUp">
                                <div>
                                    <FontAwesomeIcon icon={solid('shopping-basket')} />
                                </div>
                                <span> ورود | ثبت نام </span>
                            </div>
                            <div className="cart-icon">
                                <FontAwesomeIcon icon={solid('shopping-basket')} />
                            </div>
                        </div>
                    </div>
                </Row>
            </div>


            <div className="desktop-menu">
            <ul>
                     <li><a href="#"> 
                    <FontAwesomeIcon icon={solid('store')} />
                    دسته بندی ها 
                    </a></li>
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

export default DesktopHeader;