import React, { useEffect } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";

import BrandIcon1 from "../../assets/images/brands/brand-icon-1.png";
import BrandIcon2 from "../../assets/images/brands/brand-icon-2.png";
import BrandIcon3 from "../../assets/images/brands/brand-icon-3.png";
import BrandIcon4 from "../../assets/images/brands/brand-icon-4.png";
import BrandIcon5 from "../../assets/images/brands/brand-icon-5.png";
import BrandIcon6 from "../../assets/images/brands/brand-icon-6.png";
import BrandIcon7 from "../../assets/images/brands/brand-icon-7.png";
import BrandIcon8 from "../../assets/images/brands/brand-icon-8.png";
import BrandIcon9 from "../../assets/images/brands/brand-icon-9.png";
import BrandIcon10 from "../../assets/images/brands/brand-icon-10.png";
import BrandIcon11 from "../../assets/images/brands/brand-icon-11.png";
import BrandIcon12 from "../../assets/images/brands/brand-icon-12.png";
import BrandIcon13 from "../../assets/images/brands/brand-icon-13.png";
import BrandIcon14 from "../../assets/images/brands/brand-icon-14.png";
import BrandIcon15 from "../../assets/images/brands/brand-icon-15.png";

import {
  Row,
  Col,
  Container,
} from "reactstrap";

const BrandComponent = () => {
  useEffect(() => {
    $(".slider").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, []);

  return (
    <div>
      
      <div className="contact1 brands_slider mini-spacer">
        <Container>
        <Row className="justify-content-center">
            <Col md="7" className="text-center" data-aos="fade-up">
              <h1 className="title font-bold m-b-40 m-t-30">Our Brands</h1>
            </Col>
          </Row>

        <div className="slider">
            <div>
              <img className="img-fluid" src={BrandIcon1} alt="Brand 1" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon2} alt="Brand 2" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon3} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon4} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon5} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon6} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon7} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon8} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon9} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon10} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon11} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon12} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon13} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon14} alt="Brand 3" />
            </div>
            <div>
              <img className="img-fluid" src={BrandIcon15} alt="Brand 3" />
            </div>
          </div>

          
        </Container>
      </div>
    </div>
  );
};

export default BrandComponent;
