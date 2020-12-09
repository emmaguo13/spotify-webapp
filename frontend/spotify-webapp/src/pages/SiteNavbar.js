import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavbarLogo from '../images/wdb-black+white.png';

const SiteNavbar = (props) => {

    return (
        <Navbar
            expand="lg"
            style={{
                padding: '.8rem 2rem .8rem 2rem',
                minHeight: '10vh',
                background: '#1ed760',
            }}
            variant="dark"
            className="siteNavbar text-center fixed-top"
            id="siteNavbar"
        >
            <Navbar.Brand>
                <a href="/">
                    <img
                        src={NavbarLogo}
                        alt="navbar logo"
                        className="selectDisable"
                        style={{
                            width: '4rem',
                        }}
                    />
                </a>
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <a href="/about">
                        <p style={style.NavText}>About</p>
                    </a>
                    <a href="/login">
                        <p style={style.NavText}>Log In</p>
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const style = {
    NavText: {
        fontFamily: 'Bebas Neue',
        margin: '0 1rem',
        fontSize: '22px',
    },
};

export default SiteNavbar;