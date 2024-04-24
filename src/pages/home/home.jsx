import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import ContactComponent from "../../components/contact/contactcomponent.jsx";
import BrandComponent from "../../components/brands/brandcomponent.jsx";
// sections for this page
import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import FeatureComponent from "./sections/featurecomponent.jsx";







const Home = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <PortfolioComponent />
                    <FeatureComponent />
                    <ContactComponent /> 
                    <BrandComponent />                   
                </div>
            </div>
            <Footer />
        </div>
    );
}

Home.propTypes = {
    classes: PropTypes.object
};

export default Home;
