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
                        <p>Reception :  +205 123 4567 <br />Office :  +207 235 7890</p>
                    </Col>
                    <Col lg="4" md="6" className="m-b-30">
                        <h5 className="m-b-20">Email</h5>
                        <p>Office :  <a href="mailto:info@yourwebsite.com" className="link">info@someone.com</a></p>
                    </Col>
                    <Col lg="4" md="6">
                        <h5 className="m-b-20">Social</h5>
                        <div className="round-social light">
                            <Link className="link"><i className="fa fa-youtube-play"></i></Link>
                            <Link className="link"><i className="fa fa-instagram"></i></Link>
                        </div>
                    </Col>
                </Row>
                <div className="f4-bottom-bar">
                    <Row>
                        <Col md="12">
                            <div className="d-flex font-14 justify-content-between">
                                <div className="m-t-10 m-b-10 copyright">All Rights Reserved by b2bcolling.</div>
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
            <a href="https://wa.me/447939532054" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp"></i>
            </a>
        </div>
    );
}

export default Footer;
