import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
// import lgVideo from 'lightgallery/plugins/video';

/* Import all gallery images */
import galleryimage1 from '../images/gallery-img-1.jpg';
import galleryimage2 from '../images/gallery-img-2.jpg';
import galleryimage3 from '../images/gallery-img-3.jpg';
import galleryimage4 from '../images/gallery-img-4.jpg';
import galleryimage5 from '../images/gallery-img-5.jpg';
import galleryimage6 from '../images/gallery-img-6.jpg';
import galleryimage7 from '../images/gallery-img-7.jpg';
import galleryimage8 from '../images/gallery-img-8.jpg';
import galleryimage9 from '../images/gallery-img-9.jpg';
import galleryimage10 from '../images/gallery-img-10.jpg';
import galleryimage11 from '../images/gallery-img-11.jpg';
import galleryimage12 from '../images/gallery-img-12.jpg';
import galleryimage13 from '../images/gallery-img-13.jpg';
import galleryimage14 from '../images/gallery-img-14.jpg';
import galleryimage15 from '../images/gallery-img-15.jpg';
import galleryimage16 from '../images/gallery-img-16.jpg';

/* Import all thumbnails and videos */
// import videothumb1 from '../videos/videothumbnail-1.jpg';
// import videothumb2 from '../videos/videothumbnail-2.jpg';
// import videothumb3 from '../videos/videothumbnail-3.jpg';
// import videothumb4 from '../videos/videothumbnail-4.jpg';
// import video1 from '../videos/video-1.mp4';
// import video2 from '../videos/video-2.mp4';
// import video3 from '../videos/video-3.mp4';
// import video4 from '../videos/video-4.mp4';

class VideoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightboxOpen: false,
            currentMediaUrl: '',
            currentMediaType: '',
        };
    }

    openLightbox = (url, type) => {
        this.setState({ currentMediaUrl: url, lightboxOpen: true, currentMediaType: type });
    };

    closeLightbox = () => {
        this.setState({ currentMediaUrl: '', lightboxOpen: false, currentMediaType: '' });
    };

    render() {
        // const videos = [
        //     { thumbnail: videothumb1, media: video1, animation: "fade-right", type: 'video' },
        //     { thumbnail: videothumb2, media: video2, animation: "fade-up", type: 'video' },
        //     { thumbnail: videothumb3, media: video3, animation: "fade-left", type: 'video' },
        //     { thumbnail: videothumb4, media: video4, animation: "fade-left", type: 'video' },
        // ];

        const images = [
            { thumbnail: galleryimage1, media: galleryimage1, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage2, media: galleryimage2, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage3, media: galleryimage3, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage4, media: galleryimage4, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage5, media: galleryimage5, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage6, media: galleryimage6, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage7, media: galleryimage7, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage8, media: galleryimage8, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage9, media: galleryimage9, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage10, media: galleryimage10, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage11, media: galleryimage11, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage12, media: galleryimage12, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage13, media: galleryimage13, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage14, media: galleryimage14, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage15, media: galleryimage15, animation: "fade-up", type: 'image' },
            { thumbnail: galleryimage16, media: galleryimage16, animation: "fade-up", type: 'image' },
            // Add more images here in the same format
        ];

        return (
            <div className="mini-spacer">
                {/* <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center" data-aos="fade-up">
                            <h2 className="title">Video Gallery</h2>
                        </Col>
                    </Row>
                    <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade" elementClassNames="row mini-spacer pb-0">
                        {videos.map((item, index) => (
                            <div
                                key={index}
                                className={`gallery-item col-md-4`}
                                onClick={() => this.openLightbox(item.media, item.type)}
                                data-aos={item.animation}
                            >
                                <video
                                    poster={item.thumbnail}
                                    className="img-responsive card-shadow card"
                                    alt=""
                                    src={item.media}
                                />
                            </div>
                        ))}
                    </LightGallery>

                    {this.state.lightboxOpen && this.state.currentMediaType === 'video' && (
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 9999,
                            }}
                            onClick={this.closeLightbox}
                        >
                            <div style={{ maxWidth: '100%', maxHeight: '100%' }}>
                                <video
                                    width="100%"
                                    height="100%"
                                    controls
                                    autoPlay
                                    loop
                                    src={this.state.currentMediaUrl}
                                ></video>
                            </div>
                        </div>
                    )}
                </Container> */}

                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center" data-aos="fade-up">
                            <h2 className="title">Image Gallery</h2>
                        </Col>
                    </Row>
                    <LightGallery plugins={[lgZoom]} mode="lg-fade" elementClassNames="row mini-spacer pb-0">
                        {images.map((item, index) => (
                            <div
                                key={index}
                                className={`gallery-item col-md-4`}
                                onClick={() => this.openLightbox(item.media, item.type)}
                                data-aos={item.animation}
                            >
                                <figure>
                                    <img
                                        src={item.thumbnail}
                                        className="img-responsive card-shadow card"
                                        alt=""
                                    />
                                </figure>
                            </div>
                        ))}
                    </LightGallery>

                    {this.state.lightboxOpen && this.state.currentMediaType === 'image' && (
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 9999,
                            }}
                            onClick={this.closeLightbox}
                        >
                            <div className='text-center' style={{ maxWidth: '100%', maxHeight: '100%' }}>
                                {/* Embedded image */}
                                <img
                                    src={this.state.currentMediaUrl}
                                    className="img-responsive card-shadow card width_image_large"
                                    alt=""
                                />
                            </div>
                        </div>
                    )}
                </Container>
            </div>
        );
    }
}

export default VideoGallery;
