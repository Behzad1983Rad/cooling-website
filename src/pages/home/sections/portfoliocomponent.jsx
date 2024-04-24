/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';


import img1 from '../../../assets/images/portfolio/refrigeration.jpg';
import img2 from '../../../assets/images/portfolio/air-conditions.jpg';
import img3 from '../../../assets/images/portfolio/cold-room.jpg';

const PortfolioComponent = () => {
    return (
        <div>

            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center" data-aos="fade-down">
                            <h2 className="title" >OUR SERVICES</h2>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col md="4">
                            <Card className="card-shadow" data-aos="fade-right">
                                <Link to="/gallery" className="img-ho"><img className="card-img-top" src={img1} alt="wrappixel kit" /></Link>
                                <CardBody>
                                    <Link to="/gallery"><h5 className="font-medium m-b-0">Refrigeration</h5></Link>
                                    <p className="m-b-0 font-14">Lorem ipsum doller sit amet</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow" data-aos="fade-up">
                                <Link to="/gallery" className="img-ho"><img className="card-img-top" src={img2} alt="wrappixel kit" /></Link>
                                <CardBody>
                                    <Link to="/gallery"><h5 className="font-medium m-b-0">Air Conditions</h5></Link>
                                    <p className="m-b-0 font-14">Lorem ipsum doller sit amet</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow" data-aos="fade-left">
                                <Link to="/gallery" className="img-ho"><img className="card-img-top" src={img3} alt="wrappixel kit" /></Link>
                                <CardBody>
                                    <Link to="/gallery"><h5 className="font-medium m-b-0">Cold Room</h5></Link>
                                    <p className="m-b-0 font-14">Lorem ipsum doller sit amet</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PortfolioComponent;
