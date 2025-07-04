import React from "react";
import { Card, CardBody } from 'reactstrap';

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
              Contact Acbcooling for expert HVAC services in London.
               Whether you need installation, repair, or maintenance for air conditioning or refrigeration systems,
                fill out the form below. We'll promptly get in touch to discuss your needs.
               
              </h6>
            </Col>
          </Row>
        </Container>
      </div>


      <div className="spacer bg-light">
        <Container className="feature30">
          <Row>
            <Col lg="10" data-aos="fade-right"><img className="img-fluid rounded img-responsive grescale" src={ContactImage} alt="" /></Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box" data-aos="fade-left">
              <Card className="card-shadow">
                <CardBody className="detail-box p-40 bg-info">
                  <div className="detail-box p-40 bg-info" data-aos="fade-left">
                    <h2 className="text-white">Acbcooling</h2>
                    <p className="text-white m-t-30">
                    07737690300
                      <br /> <a href="mailto: acbcooling@yahoo.com" className="text-white">acbcooling@yahoo.com</a>
                    </p>
                    <p className="text-white">
                      Office : 07737690300
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
};

export default ContactComponent;
