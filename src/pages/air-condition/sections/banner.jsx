import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Banner = () => {
    return (
        <div className="static-slider-head static-slider-head-2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="10" md="10" className="align-self-center text-center">
                        <h1 className="title" data-aos="fade-down">Air Condition</h1>
                       
                        <h4 className="subtitle font-light" data-aos="fade-up">
                        Experience year-round comfort with our HVAC website's air conditioning solutions. From energy-efficient units to innovative climate control systems, we ensure your indoor environment stays cool and comfortable.
                        </h4>
                        <a href="tel:07737690300" className="btn btn-info-gradiant m-r-20 btn-md m-t-30 font-20" data-aos="fade-up"><i className="fa fa-phone"></i> &nbsp; Call Us</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Banner;
