import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Banner = () => {
    return (
        <div className="static-slider-head static-slider-head-2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="10" md="10" className="align-self-center text-center">
                        <h1 className="title" data-aos="fade-down">Termo King</h1>
                        <h4 className="subtitle font-light" data-aos="fade-up">
                            We offer expert Thermo King installation, repair and maintenance for reliable refrigeration units and climate control systems. Our energy-efficient refrigeration options ensure your cargo stays at optimal temperatures, enhancing your cold chain logistics. Trust our skilled Thermo King technicians for routine inspections and emergency repairs, minimizing downtime and protecting your valuable goods.
                        </h4>
                        <a href="tel:07737690300" className="btn btn-info-gradiant m-r-20 btn-md m-t-30 font-20" data-aos="fade-up"><i className="fa fa-phone"></i> &nbsp; Call Us</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Banner;
