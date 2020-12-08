import React from 'react';
import $ from 'jquery';



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../css/Loading.css';
import Navbar from "react-bootstrap";

const Loading = () => {
    $(document).ready(function () {
        /* Check the location of each desired element */
        $('.fade-in').each(async function (i) {
            const top_of_object = $(this).offset().top;
            const bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > top_of_object) {
                $(this).animate({ opacity: '1' }, 550);
            }
        });
        /* Every time the window is scrolled */
        $(window).scroll(async function () {
            /* Check the location of each desired element */
            $('.fade-in').each(function (i) {
                const top_of_object = $(this).offset().top;
                const bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > top_of_object) {
                    $(this).animate({ opacity: '1' }, 350);
                }
            });
        });
    });
    return (
        <Navbar className="navbar navbar-expand-lg fixed-top ">
            <a className="navbar-brand" href="#"/>
            <img src="images/wdb-black+white.png" className="img-fluid, logo" alt="hello">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-4">
                        <li className="nav-item">
                            <a className="nav-link, top" data-value="about" href="#">About</a></li>
                        <div className="vl"/>
                        <li className="nav-item">
                            <a className="nav-link, top" data-value="portfolio" href="#">Log In</a>
                        </li>
                    </ul>
                </div>
        </Navbar>

    );
};

export default Loading;
