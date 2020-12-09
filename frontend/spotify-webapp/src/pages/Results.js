import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import '../css/Results.css';
import Loading from "./Loading";
import IBMWatson from "../images/ibmwatson.png";
import SpotifyLogo from "../images/spotify_black_clean.png";
import MusicHead from "../images/musicbrain.png";
import Pisces from "../images/pisces.jpg";

const Results = () => {
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
        <div className="Results">
            <SiteNavbar sticky="true" bg="transparent" />
            <div className="header">
                <div className="title-border">
                    <div className="title">
                        <h1 id="title-text">Results</h1>
                    </div>
                </div>
                <div className="description">
                    <h1> Results! </h1>
                </div>
                <section>
                    <table>
                        <tr>
                            <td>
                                <img src={Pisces} className="img-fluid watson" alt="Image N/A"/>
                            </td>
                            <td>
                                <div className="v2"/>
                            </td>
                            <td>
                                <img src={SpotifyLogo} className="img-fluid spotifyi"
                                     alt="Image N/A"/>

                            </td>
                        </tr>
                    </table>
                </section>
                
            </div>
        </div>
    );
};
export default Results;