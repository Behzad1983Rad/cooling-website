import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="10" md="10" className="align-self-center text-center">
                        <h3 className="title" data-aos="fade-down">Acbcooling</h3>
                         <h4 className='logo-title text-white'  data-aos="fade-down">
                            Refrigeration & Air Condition <br /> Termo King, Service, Repair & Installation
                            </h4>
                            <br />
                        <h5 className="subtitle font-light" data-aos="fade-up">
                        Acbcooling is a leading HVAC contractor in London, specializing in advanced installation, repair, and maintenance of air conditioning and refrigeration systems. Our expert team ensures efficient and tailored cooling solutions for your needs.
                        </h5>
                        <a href="tel:07737690300" className="btn btn-info-gradiant m-r-20 btn-md m-t-30 font-20" data-aos="fade-up"><i className="fa fa-phone"></i> &nbsp; Call Us</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
