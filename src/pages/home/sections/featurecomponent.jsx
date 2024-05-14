/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import img5 from '../../../assets/images/features/feature30/fixing-frezer.jpg';

const FeatureComponent = () => {
    return (
        <div>
            
            <div className="spacer bg-light feature4">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center"  data-aos="fade-up">
                            <h1 className="title font-bold">Features</h1>
                            <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
                        </Col>
                    </Row>
                    <Row className="m-t-40 services_cols">
                        <Col md="4" className="wrap-feature4-box text-center d-flex"  data-aos="fade-right">
                            <Card className='card-shadow flex-fill'>
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-star"></i></div>
                                    <h5 className="font-bold">What do we do</h5>
                                    <p className="m-t-20">We provide a complete range of refrigeration & cooling system maintenance, design, and installation services to a wide variety of customers in commercial, industrial, retail and public sectors including</p>
                                    <div className='position-bottom'>
                                        <a href="#" className="btn btn-md m-t-30 btn-info-gradiant font-14 font-bold">Explore More<i className="ti-arrow-right"></i></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" className="wrap-feature4-box text-center d-flex" data-aos="fade-down">
                            <Card className='card-shadow flex-fill'>
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-briefcase"></i></div>
                                    <h5 className="font-bold">How does it work? </h5>
                                    <p className="m-t-20">Call us on 07376942333</p>
                                    <p className="m-t-20">Email us on info@someone.com</p>
                                    <p className="m-t-20">We visit your location.</p>
                                    <div className='position-bottom'>
                                        <a href="#" className="btn btn-md m-t-30 btn-info-gradiant font-14 font-bold">Explore More<i className="ti-arrow-right"></i></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md="4" className="wrap-feature4-box text-center d-flex" data-aos="fade-left">
                            <Card className='card-shadow flex-fill'>
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-money"></i></div>
                                    <h5 className="font-bold m-b-20">Rates</h5>
                                    <ul>
                                        <li><strong className='font-bold'>£120 +VAT</strong>  Within London congestion area</li>
                                        <li><strong className='font-bold'>£85 +VAT</strong>  Outside congestion area</li>
                                    </ul>
                                    <p className='m-t-10'>* Call out charge is redeemable against the repair/installation and payable immediately upon job completion.</p>
                                    <div className='position-bottom'>
                                        <a href="#" className="btn btn-md m-t-30 btn-info-gradiant font-14 font-bold">Explore More<i className="ti-arrow-right"></i></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" className="wrap-feature4-box text-center d-flex" data-aos="fade-right">
                            <Card className='card-shadow flex-fill'>
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-check-circle"></i></div>
                                    <h5 className="font-bold">Why us</h5>
                                    <ul>
                                        <li>No hourly rates!</li>
                                        <li>No middle man! Don't pay big companies. You only pay for their high overheads.</li>
                                        <li>We are a family business and we care for all the jobs, no matter how large or small.</li>
                                        <li>We use original spare parts for repair jobs.</li>
                                    </ul>
                                    <div className='position-bottom'>
                                        <a href="#" className="btn btn-md m-t-30 btn-info-gradiant font-14 font-bold">Explore More<i className="ti-arrow-right"></i></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md="4" className="wrap-feature4-box text-center d-flex" data-aos="fade-up">
                            <Card className='card-shadow flex-fill'>
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-user"></i></div>
                                    <h5 className="font-bold">Our Services</h5>
                                    <p className="m-t-20">We Install & maintain or repair the following:</p>
                                    <ul>
                                        <li>- Commercial fridge & freezer</li>
                                        <li>- Cold rooms & Walk-in Chillers</li>
                                        <li>- Dairy Display Cabinets</li>
                                        <li>- Chilled and Frozen Food Display</li>
                                    </ul>
                                    <div className='position-bottom'>
                                        <a href="#" className="btn btn-md m-t-30 btn-info-gradiant font-14 font-bold">Explore More<i className="ti-arrow-right"></i></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" className="wrap-feature4-box text-center d-flex" data-aos="fade-down">
                            <Card className='card-shadow flex-fill'>
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-usd"></i></div>
                                    <h5 className="font-bold">Payments </h5>
                                    <p className="m-t-20">Invoice is issued at the end of the job and is strictly payable immediately.</p>
                                    <p className="m-t-20">Online payment: paypal.me/b2bcooling</p>
                                    <p className="m-t-20">Cash, Credit card or bank transfer</p>
                                    <div className='position-bottom'>
                                        <a href="#" className="btn btn-md m-t-30 btn-info-gradiant font-14 font-bold">Explore More<i className="ti-arrow-right"></i></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className="spacer">
                <Container className="feature30">
                    <Row>
                        <Col lg="10" data-aos="fade-right"><img src={img5} className="rounded img-responsive grescale" alt="" /></Col>
                        <Col lg="5" md="7" className="text-center wrap-feature30-box">
                            <Card className="card-shadow"  data-aos="fade-left">
                                <CardBody>
                                    <div className="p-20">
                                        <h2 className="title font-bold">Our Guarantee</h2>
                                        <p>All parts replacements and installations come with minimum six months guarantee (subject to maintenance package).</p>
                                        <p><span className='font-bold'>Example:</span> A condenser fan replacements is automatically subjected to 6 months guarantee, but if serviced within 6 months, the guarantee is extended to one year.</p>
                                        <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" href="#"><span>Explore More <i className="ti-arrow-right"></i></span></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default FeatureComponent;
