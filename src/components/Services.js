import React from 'react';
import { Container , Row } from 'react-bootstrap';
import "../style/services.css";

// images
import service1 from "../data/cat-7.png";
import service2 from "../data/cat-6.png";
import service3 from "../data/cat-5.png";
import service4 from "../data/cat-4.png";
import service5 from "../data/cat-3.png";
import service6 from "../data/cat-2.png";

const Services = () => {
    return (
        <div>
            <Container className='services-container'>
                <Row>
                    <div className="col-lg-2 col-4  service-box">
                        <img src={service1} alt="services" style={{width:'52px',height:'52px'}} />
                        <span> دیجی کالا جت </span>
                    </div> 
                    <div className="col-lg-2 col-4  service-box">
                        <img src={service2} alt="services" style={{width:'52px',height:'52px'}} />
                        <span> تخفیف های تابستونی </span>
                    </div> 
                    <div className="col-lg-2 col-4  service-box">
                        <img src={service3} alt="services" style={{width:'52px',height:'52px'}} />
                        <span> دیجی پی </span>
                    </div> 
                    <div className="col-lg-2 col-4  service-box">
                        <img src={service4} alt="services" style={{width:'52px',height:'52px'}} />
                        <span> دیجی کالا مهر </span>
                    </div> 
                    <div className="col-lg-2 col-4  service-box">
                        <img src={service5} alt="services" style={{width:'52px',height:'52px'}} />
                        <span> حراج مد و پوشاک </span>
                    </div> 
                    <div className="col-lg-2 col-4  service-box">
                        <img src={service6} alt="services" style={{width:'52px',height:'52px'}} />
                        <span> قرعه کشی بهار </span>
                    </div> 
                </Row>
            </Container>
        </div>
    );
};

export default Services;