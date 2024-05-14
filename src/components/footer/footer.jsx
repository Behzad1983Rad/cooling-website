import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';


const Footer = () => {
    return (
        <div className="footer4 b-t mini-spacer">
            <Container>
                <Row>
                    <Col lg="4" md="6" className="m-b-30">
                        <h5 className="m-b-20">Phone</h5>
                        <p>Engineer :   07376942333 <br />Office :  +207 235 7890</p>
                    </Col>
                    <Col lg="4" md="6" className="m-b-30">
                        <h5 className="m-b-20">Email</h5>
                        <p>Office :  <a href="mailto:acbcooling@yahoo.com" className="link">acbcooling@yahoo.com</a></p>
                    </Col>
                    {/* <Col lg="4" md="6">
                        <h5 className="m-b-20">Social</h5>
                        <div className="round-social light">
                            <Link href="https://www.youtube.com/" className="link"><i className="fa fa-youtube-play"></i></Link>
                            <Link href="https://www.instagram.com/acbcooling" className="link" target="_blank"><i className="fa fa-instagram"></i></Link>
                        </div>
                    </Col> */}
                    <Col lg="4" md="6">
                        <h5 className="m-b-20">Social</h5>
                        <div className="round-social light">
                            <a href="https://www.youtube.com/" className="link" target="_blank" rel="noreferrer"><i className="fa fa-youtube-play"></i></a>
                            <a href="https://www.instagram.com/acbcooling/" className="link" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        </div>
                    </Col>
                </Row>
                <div className="f4-bottom-bar">
                    <Row>
                        <Col md="12">
                            <div className="d-flex font-14 justify-content-between">
                                <div className="m-t-10 m-b-10 copyright">All Rights Reserved by Acbcooling.</div>
                                <div className="links ms-auto m-t-10 m-b-10">
                                    <Link className="p-10 p-l-0">Terms of Use</Link>
                                    <Link className="p-10">Legal Disclaimer</Link>
                                    <Link className="p-10">Privacy Policy</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            {/* WhatsApp Icon */}
            <a href="https://wa.me/447376942333" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp"></i>
            </a>
        </div>
    );
}

export default Footer;
