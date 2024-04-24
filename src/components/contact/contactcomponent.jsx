import React from "react";

import ContactImage from "../../assets/images/landingpage/gallery-img-9.jpg"

import {
  Row,
  Col,
  Container,
} from "reactstrap";

const ContactComponent = () => {
  

  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center" data-aos="fade-up">
              <h1 className="title font-bold">Contact Form</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact1 bg-light">
        <Container>
          <Row>
            <div className="spacer pt-0">
              <Row className="m-0">
                <Col lg="8" data-aos="fade-right">
                  <div className="contact-box p-r-40">
                    <img className="img-fluid" src={ContactImage} alt="" />
                  </div>
                </Col>
                <Col lg="4">
                  <div className="detail-box p-40 bg-info" data-aos="fade-left">
                    <h2 className="text-white">b2b Cooling Headquarters</h2>
                    <p className="text-white m-t-30">
                      251 546 9442
                      <br /> <a href="mailto:info@yourwebsite.com" className="text-white">info@someone.com</a>
                    </p>
                    <p className="text-white">
                      Office : +207 235 7890
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactComponent;
