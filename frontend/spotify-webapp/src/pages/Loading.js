import React from 'react';
import $ from 'jquery';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../css/Loading.css';
import Navbar from "react-bootstrap";
import SiteNavbar from "./SiteNavbar";

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
        <div className="header">
            <section>
                <table>
                    <tr>
                        <td>
                            <img src="../images/ibmwatson.png" className="img-fluid watson" alt="Image N/A"/>
                        </td>
                        <td>
                            <div className="v2"/>
                        </td>
                        <td>
                            <img src="../images/spotify_black_clean.png" className="img-fluid spotifyi"
                                 alt="Image N/A"/>

                        </td>
                    </tr>
                </table>
            </section>
            <div className="container">
            </div>
            <div className="description">
                <h1> Personality through Music </h1>
                <button className="btn btn-outline-secondary btn-lg butt "> Log In to Get Started</button>
            </div>
            <img src="../images/musicbrain.png" className="img-fluid music" alt="Image N/A"/>
        </div>
    );
};

export default Loading;
