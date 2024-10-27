/* eslint-disable */
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import img1 from '../../../assets/images/ac-images/air-condition-installation.jpg';
import img5 from '../../../assets/images/ac-images/gurante1.jpg';

import Brand1 from '../../../assets/images/ac-images/brand-1.jpg';
import Brand2 from '../../../assets/images/ac-images/brand-2.jpg';
import Brand3 from '../../../assets/images/ac-images/brand-3.jpg';
import Brand4 from '../../../assets/images/ac-images/brand-4.jpg';


const CntentComponent = () => {
    return (
        <div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center"  data-aos="fade-up">
                            <h2 className="title font-bold">Installation & Service</h2>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col md="7" data-aos="fade-right">
                            <Card>
                                <CardBody className='m-t-30'>
                                    <p className="m-b-10 font-18">Termo King installation</p>
                                    <p className="m-b-10 font-18">VRV certified installer</p>
                                    <p className="m-b-10 font-18"> Termo King general and deep chemical service</p>
                                    <p className="m-b-10 font-18">Upgrade existing Termo King</p>
                                    <p className="m-b-10 font-18">We install & service Termo King units, small and large, for all types of commercial and domestic premises.
                                        Our suppliers are well known industry standards such as Daikin, Mitsubishi, LG, Fujitsu, Panasonic, etc.</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="5" data-aos="fade-left">
                            <Card className="card-shadow m-t-20">
                                <div className="img-ho"><img className="card-img-top h-unset" src={img1} alt="" /></div>
                            </Card>
                        </Col>

                        <Col md="12" className='text-center' data-aos="fade-left">
                            <Link to="/gallery" className="btn btn-info-gradiant m-r-20 btn-md m-t-30 font-20">
                                View Gallery
                            </Link>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className="mini-spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center" data-aos="fade-up">
                            <h2 className="title font-bold">Brands</h2>
                            <h6 className="subtitle">
                                Our suppliers are well known industry standards such as Daikin, Mitsubishi, LG, Fujitsu, Panasonic, etc.
                            </h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40 image-h-unset" data-aos="fade-up">
                        <Col md="3">
                            <Card className="card-shadow">
                                <div className="img-ho"><img className="card-img-top" src={Brand1} alt="" /></div>
                            </Card>
                        </Col>
                       
                        <Col md="3">
                            <Card className="card-shadow">
                                <div className="img-ho"><img className="card-img-top" src={Brand2} alt="" /></div>
                            </Card>
                        </Col>

                        <Col md="3">
                            <Card className="card-shadow">
                                <div className="img-ho"><img className="card-img-top" src={Brand3} alt="" /></div>
                            </Card>
                        </Col>

                        <Col md="3">
                            <Card className="card-shadow">
                                <div className="img-ho"><img className="card-img-top" src={Brand4} alt="" /></div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center" data-aos="fade-up">
                            <h2 className="title font-bold">Why us</h2>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col md="12" data-aos="fade-down">
                            <Card>
                                <CardBody>
                                    <ul className='content-listing'>
                                        <li>Same day free quotation visit.</li>
                                        <li>We study your location and suggest the suitable Air Condition unit within your budget.</li>
                                        <li>We survey your indoor and outdoor premises for best piping & wiring options.</li>
                                        <li>Installation completed usually in one day for small jobs.</li>
                                        <li>All jobs will be carried out by a qualified engineer with over 10 years of experience.</li>
                                        <li>Air Condition units operational on the same day!</li>
                                        <li>Minimum 3 years warranty (Parts only)</li>
                                        <li>Optional warranty extension to 5 years. (Parts only)</li>
                                        <li>Have your own unit? No problem. We install it for you! Immediate support visits.</li>
                                        <li>We not only match but also offer 2% off on any written quotation form competitors!</li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6" className="text-left" data-aos="fade-right">
                            <h2 className="title font-bold">How does it work?</h2>
                            <CardBody>
                                <ol className='content-listing'>
                                    <li>Call us on 07376942333</li>
                                    <li>We visit your location.</li>
                                    <li>For repairs there is a £120.00+VAT call out charge (£150.00+VAT central London), </li>
                                    <li>For installation, you’ll get a rough estimate on the same day and an accurate quotation within 24 hours.</li>
                                </ol>
                            </CardBody>
                        </Col>

                        <Col md="6" className="text-left" data-aos="fade-left">
                            <h2 className="title font-bold">Rates</h2>
                                <CardBody>
                                    <ul className='content-listing'>
                                        <li>Installation cost varies and can start from £800.00+VAT.</li>
                                        <li>The total cost will be the cost of Air Condition unit plus the installation material i.e. copper pipes, cabling, brackets, drainage pump, etc.</li>
                                        <li>Example: A 2.5 KW wall mount Air Condition with 5 meter pipe run will cost from £1400.00+VAT.</li>
                                    </ul>
                                </CardBody>
                        </Col>
                    </Row>
                    

                    
                    
                </Container>
            </div>

            

            <div className="spacer">
                <Container className="feature30">
                    <Row>
                        <Col lg="10" data-aos="fade-right"><img src={img5} className="rounded img-responsive grescale" alt="" /></Col>
                        <Col lg="5" md="7" className="text-center wrap-feature30-box" data-aos="fade-left">
                            <Card className="card-shadow">
                                <CardBody>
                                    <div className="p-20">
                                        <h2 className="title font-bold">Our Guarantee</h2>
                                        <p>All Air Condition units come with 3 years warranty.</p>
                                        <p>Option to extend warranty to 5 years.</p>
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

export default CntentComponent;
