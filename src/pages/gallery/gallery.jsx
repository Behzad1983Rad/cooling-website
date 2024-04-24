import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import ContactComponent from "../../components/contact/contactcomponent.jsx";
import BrandComponent from "../../components/brands/brandcomponent.jsx";

// sections for this page
import GalleryBanner from "./sections/gallerybanner.jsx";
import VideoGallery from "./sections/gallerycomponent.jsx";






const Gallery = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <GalleryBanner />
                    <VideoGallery />
                    <ContactComponent /> 
                    <BrandComponent />                   
                </div>
            </div>
            <Footer />
        </div>
    );
}

Gallery.propTypes = {
    classes: PropTypes.object
};

export default Gallery;
