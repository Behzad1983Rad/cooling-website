/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

import logo from '../../assets/images/logos/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <>
            {/* <div className='phone_top_bar' id='rs-header'>
                <div className="toolbar-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12" data-aos="fade-right">
                                <div className="toolbar-contact">
                                    <ul>
                                        <li><i className="fa fa-envelope-o"></i><a href="mailto:acbcooling@yahoo.com">acbcooling@yahoo.com</a></li>
                                        <li><i className="fa fa-phone"></i><a href="tel:07737690300">07737690300</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12" data-aos="fade-left">
                                <div className="toolbar-sl-share">
                                    <ul>
                                        <li><a href="https://www.instagram.com/acbcooling/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="https://youtube.com/@acbcooling-pc1mh?si=aIWm1cdbr3hxtPCx" target="_blank"><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="topbar header1 po-relative bg-dark" id="top">
                <div className="header6">
                    <Container className="po-relative">
                        <Navbar className="navbar-expand-lg h6-nav-bar">
                            <NavbarBrand href="/" data-aos="fade-right">
                                <img style={{scale: "1.1"}} className='logo-w' src={logo} alt="" />
                            </NavbarBrand>
                            {/* <span className='logo-title text-white'  data-aos="fade-down">
                            Refrigeration & Air Condition <br /> Service, Repair & Installation
                            </span> */}
                            <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                            <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 justify-content-end" id="h6-info">
                                <Nav navbar className="ms-auto" data-aos="fade-up">
                                    <NavItem>
                                        <Link className="nav-link" to={"/"}>
                                            Home
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to={"/air-condition"}>
                                            Air Condition
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to={"/refrigration"}>
                                            Refrigeration
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to={"/thermo-king"}>
                                        Thermo King                                        
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to={"/gallery"}>
                                            Gallery
                                        </Link>
                                    </NavItem>
                                    {/* <NavItem>
                                        <Link className="nav-link" to={""}>
                                            Youtube
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to={"https://www.instagram.com/acbcooling/"}>
                                            Instagram
                                        </Link>
                                    </NavItem> */}
                                    <NavItem>
    <a className="nav-link" href="https://youtube.com/@acbcooling-pc1mh?si=aIWm1cdbr3hxtPCx" target="_blank" rel="noreferrer">
        Youtube
    </a>
</NavItem>
<NavItem>
    <a className="nav-link" href="https://www.instagram.com/acbcooling/" target="_blank" rel="noreferrer">
        Instagram
    </a>
</NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Container>
                </div>
            </div>
        </>
    );

}
export default Header;
