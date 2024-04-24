import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import ContactComponent from "../../components/contact/contactcomponent.jsx";
import BrandComponent from "../../components/brands/brandcomponent.jsx";

// sections for this page
import Banner from "./sections/banner.jsx";
import CntentComponent from "./sections/contentcomponent.jsx";






const AirCondition = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Banner />
                    <CntentComponent />
                    <ContactComponent />  
                    <BrandComponent />                  
                </div>
            </div>
            <Footer />
        </div>
    );
}

AirCondition.propTypes = {
    classes: PropTypes.object
};

export default AirCondition;
