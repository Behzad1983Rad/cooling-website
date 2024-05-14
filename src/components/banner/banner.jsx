import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="10" md="10" className="align-self-center text-center">
                        <h1 className="title" data-aos="fade-down">Acbcooling</h1>
                        <h4 className="subtitle font-light" data-aos="fade-up">
                        Acbcooling acb is a HVAC contractor and procurement company specialist for Air conditioning and Refrigeration. Coldskill designs, installs, and maintains advanced cooling systems to help people do better work and live better lives. 
                        </h4>
                        <a href="tel:+123456789" className="btn btn-info-gradiant m-r-20 btn-md m-t-30 font-20" data-aos="fade-up"><i className="fa fa-phone"></i> &nbsp; Call Us</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
